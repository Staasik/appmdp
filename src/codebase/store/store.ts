import { MAIN_IP } from "App";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "codebase/http";
import { IUser } from "codebase/models/IUser";
import { AuthResponse } from "codebase/models/response/AuthResponse";
import AuthService from "codebase/services/AuthService";
import CheckListsService from "codebase/services/CheckListsService";
import DiagnosticsService from "codebase/services/DiagnosticsService";
import UserService from "codebase/services/UserService";
import { IAnswer } from "components/pages/Trackers/Choises";
import { makeAutoObservable } from 'mobx';
import blockItemMock from "mockdata/UserProfileBlocks";

enum AnswerTypeEnum {
    buttons,
    text,
    multiselect
}

type AnswerType = keyof typeof AnswerTypeEnum
type AnswerValue = number | string | Array<IAnswer>

export const defaultOption: IAnswer = { value: null, label: 0 }

interface ITrackerAnswer {
    type: AnswerType,
    value?: AnswerValue | null
}

export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false
    checkListBlocks = blockItemMock
    chatOpened = false
    trackerAnswers: Array<ITrackerAnswer> = [
        { type: 'buttons', value: null},
        { type: 'text', value: null },
        { type: 'multiselect', value: [defaultOption] },
        { type: 'multiselect', value: [defaultOption] },
        { type: 'text', value: null },
        { type: 'text', value: null }
    ]

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    setChatOpened(bool: boolean) {
        this.chatOpened = bool
    }

    addNewAnswers(index: number, answers: AnswerValue | null){
        if(this) this.trackerAnswers[index].value = answers
    }

    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    async registration(name: string, login: string, password: string) {
        try {
            const response = await AuthService.registration(name, login, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
            window.location.href = '/login'
        } catch (error) {
            console.log(error)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
            this.setAuth(false)
        } finally {
            this.setLoading(false)
        }
    }

    async changeUsername(newname: string) {
        try {
            const response = await UserService.changeUsername(newname)
            localStorage.setItem('token', response.data.accessToken)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    async setCheckLists(checkListNumber: number, data: Array<number>) {
        try {
            await CheckListsService.setCheckLists(checkListNumber, data)
        } catch (error) {
            console.log(error)
        }
    }

    async getCheckLists() {
        try {
            const response = await CheckListsService.getCheckLists()
            return response.data
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async setBaseDiagnosticsData(diagnosticID: number, data: number[]){
        try {
            const response = await DiagnosticsService.setBaseDiagnosticsData(diagnosticID, data)
            return response.data
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async getBaseDiagnosticsData(diagnosticID: number){
        try {
            const response = await DiagnosticsService.getBaseDiagnosticsData(diagnosticID)
            return response.data
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async UploadFile(file: File) {
        try {
            const response = await UserService.UploadFile(file)
            return response.data.file
        } catch (error) {
            console.log(error)
        }
    }
}
