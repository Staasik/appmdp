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
            let response = results.answers.split(',').map(Number)
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

    async getDiagnosticsForUser(req, res, next) {
        try {
            const response = await diagnosticsService.getDiagnosticsForUser(req.headers.authorization)
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
            const { data } = req.body
            const response = await diagnosticsService.updateDiagnostic(req.headers.authorization, data)
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

    async getDiagnostic(req, res, next) {
        try {
            const { diagnosticID } = req.body
            const response = await diagnosticsService.getDiagnosticData(req.headers.authorization, diagnosticID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async getDiagnosticResult(req, res, next) {
        try {
            const { id, answers } = req.body
            const response = await diagnosticsService.getDiagnosticResult(req.headers.authorization, id, answers)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async publishDiagnostic(req, res, next) {
        try {
            const { data, diagnosticID } = req.body
            const response = await diagnosticsService.publishDiagnostic(req.headers.authorization, data, diagnosticID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async isPublishedTest(req, res, next) {
        try {
            const response = await diagnosticsService.isPublishedTest(req.headers.authorization)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const diagnosticsController = new DiagnosticsController();