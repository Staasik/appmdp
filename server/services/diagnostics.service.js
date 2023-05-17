import _ from 'lodash'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"
import { DiagnosticDTO } from '../dtos/diagnostic.dto.js';
import { questionsService } from './questions.service.js';
import { diagnosticsOptionsService } from './diagnosticsOptions.service.js';

class DiagnosticsService {

    async setResults(accessToken, diagnosticID, reqData) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            db.models.diagosticsResultModel.create({diagnosticID, userID: userData.id, answers: reqData.toString()})
            return diagnosticID
        }
        return null
    }

    async getResults(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            const answers = await db.models.diagosticsResultModel.findOne({
                where: {
                    userID: userData.id,
                    diagnosticID
                },
                order: [ [ 'createdAt', 'DESC' ]]
            })
            return answers
        }
        return null
    }

    async getDiagnosticsForAdmin(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const diagnostics = await db.models.diagnosticModel.findAll()
            const response = diagnostics.map((v) => new DiagnosticDTO(v))
            return response
        }
        return null
    }

    async getDiagnosticData(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const diagnostic = await db.models.diagnosticModel.findOne({
                where:{
                    id: diagnosticID
                }
            })
            const questions = await questionsService.getQuestions(accessToken, diagnosticID)
            const options = await diagnosticsOptionsService.getDiagnosticsOptions(accessToken, diagnosticID)
            const response = {...new DiagnosticDTO(diagnostic),questions,options}
            return response
        }
        return null
    }

    async createNewDiagnostic(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const diagnostic = await db.models.diagnosticModel.create({title: 'Название', published: false})
            return new DiagnosticDTO(diagnostic)
        }
        return null
    }

    async deleteDiagnostic(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const diagnostic = await db.models.diagnosticModel.destroy({
                where:{
                    id: diagnosticID
                }
            })
            questionsService.deleteQuestionsByID(diagnosticID)
            return diagnostic
        }
        return null
    }

    async updateDiagnostic(accessToken, diagnosticData){
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const diagnostic = await db.models.diagnosticModel.update({
                title: diagnosticData.title, 
                description: diagnosticData.description, 
                answersDescription: diagnosticData.answersDescription},{
                where:{
                    id: diagnosticData.id
                }
            })
            await questionsService.upsertQuestions(diagnosticData.questions)
            await diagnosticsOptionsService.upsertDiagnosticsOptions(diagnosticData.options)
            return diagnostic
        }
        return null
    }
}

export const diagnosticsService = new DiagnosticsService()