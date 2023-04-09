import _ from 'lodash';
import { userService } from "../services/user.service.js";

class UserController {

    async registration(req, res, next) {
        try {
            const { name, login, password } = req.body
            const userData = await userService.registration(name, login, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async login(req, res, next) {
        try {
            const { login, password } = req.body
            const userData = await userService.login(login, password)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)

        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (error) {
            next(error)
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async uploadFile(req, res, next) {
        try {
            const user = await userService.uploadFile(req.headers.authorization, req.file)
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async changeName(req, res, next) {
        try {
            const { newname } = req.body
            const user = await userService.changeName(req.headers.authorization, newname)
            res.cookie('refreshToken', user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async changeAvatar(req, res, next) {
        try {
            const user = await userService.changeAvatar(req.headers.authorization, req.file)
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }

    async setResults(req, res, next) {
        try {
            const results = await userService.setResults(req.headers.authorization, req.file)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
    
    async getResults(req, res, next) {
        try {
            const { diagnosticID, answers } = req.body
            const results = await userService.setResults(req.headers.authorization, diagnosticID, answers)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
}

export const userController = new UserController();