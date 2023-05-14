import { diagnosticsOptionsService } from "../services/diagnosticsOptions.service.js"

class DiagnosticsOptionsController {

    async getDiagnosticsOptions(req, res, next) {
        try {
            const { diagnosticID } = req.body
            const response = await diagnosticsOptionsService.getDiagnosticsOptions(req.headers.authorization, diagnosticID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async createDiagnosticsOption(req, res, next) {
        try {
            const { diagnosticID, data } = req.body
            const response = await diagnosticsOptionsService.createDiagnosticsOption(req.headers.authorization, diagnosticID, data)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
    
    async deleteDiagnosticsOption(req, res, next) {
        try {
            const { id } = req.body
            const response = await diagnosticsOptionsService.deleteDiagnosticsOption(req.headers.authorization, id)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const diagnosticsOptionsController = new DiagnosticsOptionsController();