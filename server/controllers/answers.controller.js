import { answersService } from "../services/answers.service.js"

class AnswersController {

    async getAnswers(req, res, next) {
        try {
            const { questionID } = req.body
            const response = await answersService.getAnswers(req.headers.authorization, questionID)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async createAnswer(req, res, next) {
        try {
            const { questionID, data } = req.body
            const response = await answersService.createAnswer(req.headers.authorization, questionID, data)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
    
    async deleteAnswer(req, res, next) {
        try {
            const { id } = req.body
            const response = await answersService.deleteAnswer(req.headers.authorization, id)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const answersController = new AnswersController();