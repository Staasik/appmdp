import { questionsService } from "../services/questions.service.js"

class QuestionsController {

    async getQuestions(req, res, next) {
        try {
            const { questionID } = req.body
            const response = await questionsService.getQuestions(req.headers.authorization, questionID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async createQuestion(req, res, next) {
        try {
            const { questionID, data } = req.body
            const response = await questionsService.createQuestion(req.headers.authorization, questionID, data)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
    
    async deleteQuestion(req, res, next) {
        try {
            const { id } = req.body
            const response = await questionsService.deleteQuestion(req.headers.authorization, id)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const questionsController = new QuestionsController();