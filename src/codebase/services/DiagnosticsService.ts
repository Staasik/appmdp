import api from "codebase/http/index"
import { AxiosResponse } from "axios"
import { AuthResponse } from 'codebase/models/response/AuthResponse'


export default class DiagnosticsService {
    static async setBaseDiagnosticsData(diagnosticID: number, data: Array<number>): Promise<AxiosResponse<number[]>>{
        return api.post<number[]>('/setBaseDiagnosticsData', {diagnosticID, data})
    }

    static async getBaseDiagnosticsData(diagnosticID: number): Promise<AxiosResponse<number[]>>{
        return api.post<number[]>('/getBaseDiagnosticsData', { diagnosticID })
    }
}