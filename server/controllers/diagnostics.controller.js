import _ from 'lodash';
import { diagnosticsService } from '../services/diagnostics.service.js';

class DiagnosticsController {

    async setResults(req, res, next) {
        try {
            const { diagnosticID, data } = req.body
            const results = await diagnosticsService.setResults(req.headers.authorization, diagnosticID, data)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
    
    async getResults(req, res, next) {
        try {
            const { diagnosticID } = req.body
            const results = await diagnosticsService.getResults(req.headers.authorization, diagnosticID)
            let response = results.dataValues.answers.split(',').map(Number)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async getDiagnosticsForAdmin(req, res, next) {
        try {
            const response = await diagnosticsService.getDiagnosticsForAdmin(req.headers.authorization)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async createNewDiagnostic(req, res, next) {
        try {
            const response = await diagnosticsService.createNewDiagnostic(req.headers.authorization)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async deleteDiagnostic(req, res, next) {
        try {
            const { diagnosticID } = req.body
            const response = await diagnosticsService.deleteDiagnostic(req.headers.authorization, diagnosticID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async updateDiagnostic(req, res, next) {
        try {
            const { diagnosticData } = req.body
            const response = await diagnosticsService.updateDiagnostic(req.headers.authorization, diagnosticData)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async getDiagnosticData(req, res, next) {
        try {
            const { diagnosticID } = req.body
            const response = await diagnosticsService.getDiagnosticData(req.headers.authorization, diagnosticID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const diagnosticsController = new DiagnosticsController();