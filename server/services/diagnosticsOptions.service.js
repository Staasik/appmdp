import { DiagnOptionDTO } from '../dtos/diagnOption.dto.js';
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class DiagnosticsOptionsService {

    async getDiagnosticsOptions(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const answers = await db.models.diagnosticsOptionsModel.findAll({
                where: {
                    diagnosticID
                }
            })
            const response = answers.map((v) => new DiagnOptionDTO(v))
            return response
        }
        return null
    }

    async createDiagnosticsOption(accessToken, diagnosticID, data) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const Option = await db.models.diagnosticsOptionsModel.create({ diagnosticID, description: data.description, minValue: data.minValue, maxValue: data.maxValue })
            const response = new DiagnOptionDTO(Option)
            return response
        }
        return null
    }

    async deleteDiagnosticsOption(accessToken, id) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const response = await db.models.diagnosticsOptionsModel.destroy({
                where: {
                    id
                }
            })
            return response
        }
        return null
    }

    async deleteDiagnosticsOptionByID(diagnosticID) {
        await db.models.diagnosticsOptionsModel.destroy({
            where: {
                diagnosticID
            }
        })
    }

    async upsertDiagnosticsOptions(optionsData, diagnosticID) {
        await this.deleteDiagnosticsOptionByID(diagnosticID)

        for (let oData of optionsData) {
            await db.models.diagnosticsOptionsModel.create({
                description: oData.description,
                minValue: oData.minValue,
                maxValue: oData.maxValue,
                diagnosticID: diagnosticID
            })
        }
    }

}

export const diagnosticsOptionsService = new DiagnosticsOptionsService()