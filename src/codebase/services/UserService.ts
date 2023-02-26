import { AxiosResponse } from "axios"
import api from "codebase/http/index"
import { IUser } from 'codebase/models/IUser'

export default class UserService {
    static changeUsername(newname: string):Promise<AxiosResponse<any>>{
        return api.post<IUser>('/changeUsername', { newname })
    }
    static UploadFile(file: File):Promise<AxiosResponse<any>>{
        var formData = new FormData();
        formData.append('file', file)
        return api.post<File>('/uploadFile', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    }
}