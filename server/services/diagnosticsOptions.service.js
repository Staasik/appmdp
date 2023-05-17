import { AnswerDTO } from '../dtos/answer.dto.js';
import { DiagnOptionDTO } from '../dtos/diagnOption.dto.js';
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class DiagnosticsOptionsService {

    async getDiagnosticsOptions(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const answers = await db.models.diagnosticsOptionsModel.findAll({
                where:{
                    diagnosticID
                }
            })
            const response = answers.map((v) => new AnswerDTO(v))
            return response
        }
        return null
    }

    async createDiagnosticsOption(accessToken, diagnosticID, data) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const Option = await db.models.diagnosticsOptionsModel.create({diagnosticID, description: data.description, minValue:data.minValue, maxValue: data.maxValue})
            const response = new DiagnOptionDTO(Option)
            return response
        }
        return null
    }

    async deleteDiagnosticsOption(accessToken, id) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData && userData.role === 'admin'){
            const response = await db.models.diagnosticsOptionsModel.destroy({
                where:{
                    id
                }
            })
            return response
        }
        return null
    }

    async deleteDiagnosticsOptionByID(diagnosticID){
        db.models.answersModel.destroy({
            where:{
                diagnosticID
            }
        })
    }

    async upsertDiagnosticsOptions(optionsData){
        for (let oData of optionsData) {
            await db.models.questionModel
            .findOne({ where: oData.id })
            .then(function (obj) {
                if (obj) {
                    return db.models.diagnosticsOptionsModel.update({ 
                        description: oData.description,
                        minValue: oData.minValue,
                        maxValue: oData.maxValue
                    }, {
                        where: {
                            id: oData.id
                        }
                    })
                }
                return db.models.diagnosticsOptionsModel.create({ 
                    description: oData.description,
                    minValue: oData.minValue,
                    maxValue: oData.maxValue,
                    diagnosticID: oData.diagnosticID
                })
            })
        }
    }

}

export const diagnosticsOptionsService = new DiagnosticsOptionsService()