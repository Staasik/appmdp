import _ from 'lodash'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"

class TrackersService {

    async setData(accessToken, date, reqData) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            let response 
            const tempData = await db.models.trackersModel.findOne({
                where:{
                    userID: userData.id,
                    date
                }
            })

            if(tempData === null){
                response = await db.models.trackersModel.create({date, userID: userData.id, data: JSON.stringify(reqData)})
            }
            
            else{
                response = await db.models.trackersModel.update({date, userID: userData.id, data: JSON.stringify(reqData)}, {
                    where:{
                        userID: userData.id,
                        date
                    }
                })
            }
            return reqData
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