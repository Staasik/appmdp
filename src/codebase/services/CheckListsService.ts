import api from "codebase/http/index"
import { AxiosResponse } from "axios"
import { AuthResponse } from 'codebase/models/response/AuthResponse'


export default class CheckListsService {
    static async setCheckLists(checkListNumber: number, data: Array<number>): Promise<AxiosResponse<Number>>{
        return api.post<Number>('/setCheckLists', {checkListNumber, data})
    }

    static async getCheckLists(): Promise<AxiosResponse<number[][]>>{
        return api.get<number[][]>('/getCheckLists')
    }
}