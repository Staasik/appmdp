import api from "codebase/http/index"
import { AxiosResponse } from "axios"
import { AuthResponse } from 'codebase/models/response/AuthResponse'
import { IDiagnData, IDiagnItem, IQuestion } from "codebase/store/adminStore"

interface IQuestionData{
    type: 'oneAnswer' | 'someAnswers' | 'numbersList',
    text: string
}

interface IResult{
    description: string
}

export default class DiagnosticsService {
    static async setBaseDiagnosticsData(diagnosticID: number, data: Array<number>): Promise<AxiosResponse<number[]>>{
        return api.post<number[]>('/setBaseDiagnosticsData', {diagnosticID, data})
    }

    static async getBaseDiagnosticsData(diagnosticID: number): Promise<AxiosResponse<number[]>>{
        return api.post<number[]>('/getBaseDiagnosticsData', { diagnosticID })
    }

    static async getDiagnosticsForAdmin(): Promise<AxiosResponse<IDiagnItem[]>>{
        return api.get<IDiagnItem[]>('/getDiagnosticsForAdmin')
    }

    static async getDiagnosticsList(): Promise<AxiosResponse<IDiagnItem[]>>{
        return api.get<IDiagnItem[]>('/getDiagnosticsList')
    }
    
    static async getDiagnosticResult(id: number, answers: number[]): Promise<AxiosResponse<IResult | null>>{
        return api.post<IResult | null>('/getDiagnosticResult', { id, answers })
    }

    static async createDiagnostic(): Promise<AxiosResponse<IDiagnItem>>{
        return api.get<IDiagnItem>('/createDiagnostic')
    }

    static async deleteDiagnostic(diagnosticID: number): Promise<AxiosResponse<IDiagnItem>>{
        return api.post<IDiagnItem>('/deleteDiagnostic', { diagnosticID })
    }

    static async getDiagnosticData(diagnosticID: number): Promise<AxiosResponse<IDiagnData | null>>{
        return api.post<IDiagnData | null>('/getDiagnosticData', { diagnosticID })
    }

    static async createQuestion(diagnosticID: number, question: IQuestionData): Promise<AxiosResponse<IQuestion>>{
        return api.post<IQuestion>('/createQuestion', { diagnosticID, question })
    }
    
    static async updateDiagnostic(data: IDiagnData): Promise<AxiosResponse<IDiagnData>>{
        return api.post<IDiagnData>('/updateDiagnostic', { data })
    }

    static async publishDiagnostic(data: boolean, diagnosticID: number): Promise<AxiosResponse<IDiagnData>>{
        return api.post<IDiagnData>('/publishDiagnostic', { data, diagnosticID })
    }

    static async isPublishedTest(): Promise<AxiosResponse<boolean>> {
        return api.get<boolean>('/isPublishedTest')
    }
}