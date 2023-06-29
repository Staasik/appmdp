import jwt from 'jsonwebtoken'
import { db } from '../model/index.js'

class TokenService {
    // Генерирует токены по данным
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
    }

    // Валидация сессионного токена 
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
            return userData;
        } catch (e) {
            return null
        }
    }

    // Валидация долгосрочного токена 
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            return userData;
        } catch (e) {
            return null
        }
    }

    // Сохраняет долгосрочный токен в БД
    async saveToken(userId, refreshToken) {
        const tokenData = await db.models.tokenModel.findOne({ where: { userID: userId } })
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save()
        }
        const token = await db.models.tokenModel.create({ userID: userId, refreshToken })
        return token
    }

    // Удаляет долгосрочнй токен из БД
    async removeToken(refreshToken) {
        const tokenData = await db.models.tokenModel.destroy({ where: { refreshToken: refreshToken } })

        return tokenData
    }

    // Ищет долгосрочный токен в БД
    async findToken(refreshToken) {
        const tokenData = await db.models.tokenModel.findOne({ where: { refreshToken: refreshToken } })
        return tokenData
    }
}

export const tokenService = new TokenService()