import { AnswerDTO, UserAnswerDTO } from '../dtos/answer.dto.js';
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class AnswersService {

    async getAnswers(accessToken, questionID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const answers = await db.models.answersModel.findAll({
                where: {
                    questionID
                }
            })
            const response = answers ? userData.role === 'admin' ? answers.map((v) => new AnswerDTO(v)) : answers.map((v) => new UserAnswerDTO(v)) : []
            return response
        }
        return null
    }

    async createAnswer(accessToken, questionID, data) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const answer = await db.models.answersModel.create({ text: data.text, value: data.value, questionID })
            const response = new AnswerDTO(answer)
            return response
        }
        return null
    }

    async deleteAnswer(accessToken, id) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const response = await db.models.answersModel.destroy({
                where: {
                    id
                }
            })
            return response
        }
        return null
    }

    async deleteAnswersByID(questionID) {
        db.models.answersModel.destroy({
            where: {
                questionID
            }
        })
    }

    async deleteAnswers(questionID){
        await db.models.answersModel.destroy({
            where: {
                questionID
            }
        })
    }

    async upsertAnswers(answersData, questionID, newQuestionID) {
        await this.deleteAnswers(questionID)
        for (let aData of answersData) {
            return db.models.answersModel.create({
                text: aData.text,
                value: aData.value,
                questionID: newQuestionID
            })
        }
    }

}

export const answersService = new AnswersService()