import { QuestionDTO } from '../dtos/question.dto.js';
import { db } from '../model/index.js'
import { answersService } from './answers.service.js';
import { tokenService } from "./token.service.js"

class QuestionsService {

    async getQuestions(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            let questions = await db.models.questionModel.findAll({
                where: {
                    diagnosticID
                }
            })
            let response = []
            if(questions !== undefined){
                questions = questions.map((v) => new QuestionDTO(v))
                response = await Promise.all(questions.map(async (question) => {
                    return {
                    type: question.type,
                    text: question.text,
                    answers: await answersService.getAnswers(accessToken, question.questionID)
                    }
                }));
            }
            return response
        }
        return []
    }

    async createQuestion(accessToken, diagnosticID, data) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const answer = await db.models.questionModel.create({ type: data.type, text: data.text, diagnosticID })
            const response = new QuestionDTO(answer)
            return response
        }
        return null
    }

    async deleteQuestion(accessToken, id) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const response = await db.models.questionModel.destroy({
                where: {
                    id
                }
            })
            answersService.deleteAnswersByID(id)
            return response
        }
        return null
    }

    async deleteQuestionsByID(diagnosticID) {
        const questionsID = await this.getQuestionsIDByDiagnosticID(diagnosticID)
        if( questionsID.length !== 0 ) { 
            questionsID.foreach((id) => { answersService.deleteAnswersByID(id) })
        }
        db.models.questionModel.destroy({
            where: {
                diagnosticID
            }
        })
    }

    async getQuestionsIDByDiagnosticID(diagnosticID) {
        const questions = await db.models.questionModel.findAll({
            where: {
                diagnosticID
            }
        })
        return questions.map((v) => v.id)
    }

    async updateQuestions(questionsData) {
        for (let qData of questionsData) {
            await db.models.questionModel.update({ 
                text: qData.text 
            }, {
                where: {
                    id: qData.id
                }
            })
            await answersService.updateAnswers(qData.answers)
        }
    }

}

export const questionsService = new QuestionsService()