import bcrypt from 'bcrypt'
import _ from 'lodash'
import { Op } from 'sequelize'
import { UserDTO } from "../dtos/user.dto.js"
import { ApiError } from '../exceptions/api.error.js'
import { db } from '../model/index.js'
import { tokenService } from "./token.service.js"



class CheckListsService {

    async setResults(accessToken, checkListNumber, reqData) {
        const userData = tokenService.validateAccessToken(accessToken);
        const data = reqData.toString()
        if(userData){
            db.models.checkListsModel.update({ data },{
                where:{
                    userID: userData.id,
                    checkListNumber
                }
            })
            return checkListNumber
        }
        return null
    }

    async getResults(accessToken) {
        const userData = tokenService.validateAccessToken(accessToken);
        if(userData){
            const data = await db.models.checkListsModel.findAll({
                where: {
                    userID: userData.id
                }
            })
            return data
        }
        return null
    }
}

export const checkListsService = new CheckListsService()