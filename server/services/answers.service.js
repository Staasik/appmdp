import { AnswerDTO } from '../dtos/answer.dto.js';
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class AnswersService {

    async getAnswers(accessToken, questionID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const answers = await db.models.diagnosticModel.findAll({
                where:{
                    questionID
                }
            })
            const response = answers ? answers.map((v) => new AnswerDTO(v)) : []
            return response
        }
        return null
    }

    async createAnswer(accessToken, questionID, data) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const answer = await db.models.answersModel.create({text:data.text, value: data.value, questionID})
            const response = new AnswerDTO(answer)
            return response
        }
        return null
    }

    async deleteAnswer(accessToken, id) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const response = await db.models.answersModel.destroy({
                where:{
                    id
                }
            })
            return response
        }
        return null
    }

    async deleteAnswersByID(questionID){
        db.models.answersModel.destroy({
            where:{
                questionID
            }
        })
    }

    async updateAnswers(answersData){
        for (let aData of answersData) {
            await db.models.answersModel.update({ 
                text: aData.text,
                value: aData.value
            }, {
                where: {
                    id: aData.id
                }
            })
        }
    }

}

export const answersService = new AnswersService()