import _ from 'lodash'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"
import { DiagnosticDTO, UserDiagnosticDTO } from '../dtos/diagnostic.dto.js';
import { questionsService } from './questions.service.js';
import { diagnosticsOptionsService } from './diagnosticsOptions.service.js';
import { ApiError } from '../exceptions/api.error.js';

class DiagnosticsService {

    async setResults(accessToken, diagnosticID, reqData) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            db.models.diagosticsResultModel.create({ diagnosticID, userID: userData.id, answers: reqData.toString() })
            return diagnosticID
        }
        return null
    }

    async getResults(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const answers = await db.models.diagosticsResultModel.findOne({
                where: {
                    userID: userData.id,
                    diagnosticID
                },
                order: [['createdAt', 'DESC']]
            })
            return answers
        }
        return null
    }

    async getDiagnosticsForAdmin(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const diagnostics = await db.models.diagnosticModel.findAll()
            const response = diagnostics.map((v) => new DiagnosticDTO(v))
            return response
        }
        return null
    }

    async getDiagnosticsForUser(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const diagnostics = await db.models.diagnosticModel.findAll({
                where: {
                    published: true
                }
            })
            const response = diagnostics.map((v) => new UserDiagnosticDTO(v))
            return response
        }
        return null
    }

    async getDiagnosticResult(accessToken, diagnosticID, answers) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && answers) {
            const answersValue = answers.reduce((acc, curr) => acc + curr, 0);
            const options = await diagnosticsOptionsService.getDiagnosticsOptions(accessToken, diagnosticID)
            if (options) {
                const response = options.find((option) => option.minValue <= answersValue && option.maxValue >= answersValue)
                return {description: response.description}
            }
            else return null
        }
        return null
    }

    async getDiagnosticData(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const diagnostic = await db.models.diagnosticModel.findOne({
                where: {
                    id: diagnosticID
                }
            })
            const questions = await questionsService.getQuestions(accessToken, diagnosticID)
            let response
            if (userData.role === 'admin') {
                const options = await diagnosticsOptionsService.getDiagnosticsOptions(accessToken, diagnosticID)
                response = { ...new DiagnosticDTO(diagnostic), questions, options }
            }
            else {
                response = { ...new DiagnosticDTO(diagnostic), questions }
            }
            return response
        }
        
        throw ApiError.BadRequest('Пользователь не авторизован')
    }

    async createNewDiagnostic(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const diagnostic = await db.models.diagnosticModel.create({ title: 'Название', published: false })
            return new DiagnosticDTO(diagnostic)
        }
        return null
    }

    async deleteDiagnostic(accessToken, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const diagnostic = await db.models.diagnosticModel.destroy({
                where: {
                    id: diagnosticID
                }
            })
            questionsService.deleteQuestionsByID(diagnosticID)
            diagnosticsOptionsService.deleteDiagnosticsOptionByID(diagnosticID)
            return diagnostic
        }
        return null
    }

    async updateDiagnostic(accessToken, diagnosticData) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            const diagnostic = await db.models.diagnosticModel.update({
                title: diagnosticData.title,
                description: diagnosticData.description,
                answersDescription: diagnosticData.answersDescription
            }, {
                where: {
                    id: diagnosticData.id
                }
            })
            await questionsService.upsertQuestions(diagnosticData.questions, diagnosticData.id)
            await diagnosticsOptionsService.upsertDiagnosticsOptions(diagnosticData.options, diagnosticData.id)
            return diagnostic
        }
        return null
    }

    async publishDiagnostic(accessToken, data, diagnosticID) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData && userData.role === 'admin') {
            await db.models.diagnosticModel.update({ published: data }, {
                where: {
                    id: diagnosticID
                }
            })
        }
    }

    async isPublishedTest(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if (userData) {
            const diagn = await db.models.diagnosticModel.findOne({
                where: {
                    published: true
                }
            })
            if (diagn) return true
            else return false
        }
    }
}

export const diagnosticsService = new DiagnosticsService()