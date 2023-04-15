import _ from 'lodash'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class TrackersService {

    async setData(accessToken, date, reqData) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            const response = await db.models.trackersModel.create({date, userID: userData.id, data: JSON.stringify(reqData)})
            console.log(response)
            return response
        }
        return null
    }

    async getData(accessToken, date) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            const response = await db.models.trackersModel.findOne({
                where: {
                    userID: userData.id,
                    date
                }
            })
            return response
        }
        return null
    }
}

export const trackersService = new TrackersService()