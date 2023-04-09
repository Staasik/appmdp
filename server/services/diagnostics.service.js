import _ from 'lodash'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

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
}

export const diagnosticsService = new DiagnosticsService()