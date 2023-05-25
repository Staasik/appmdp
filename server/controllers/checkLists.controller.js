import _ from 'lodash';
import { checkListsService } from '../services/checkLists.service.js';

class CheckListsController {

    async setResults(req, res, next) {
        try {
            const { checkListNumber, data } = req.body
            const results = await checkListsService.setResults(req.headers.authorization, checkListNumber, data)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
    
    async getResults(req, res, next) {
        try {
            const results = await checkListsService.getResults(req.headers.authorization)
            let response =  [] 
            results.forEach((value) => {
                if(value.data){
                    response.push(value.data.split(',').map(Number))
                }
                else{
                    response.push(Array(10).fill(0).join(','))
                }
            })
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

export const checkListsController = new CheckListsController();