import { MAIN_IP } from "App";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "codebase/http";
import { IUser } from "codebase/models/IUser";
import { AuthResponse } from "codebase/models/response/AuthResponse";
import AuthService from "codebase/services/AuthService";
import CheckListsService from "codebase/services/CheckListsService";
import DiagnosticsService from "codebase/services/DiagnosticsService";
import TrackerService from "codebase/services/TrackersService";
import UserService from "codebase/services/UserService";
import { IAnswer } from "components/pages/Trackers/Choises";
import { makeAutoObservable } from 'mobx';
import { ButtonsMock } from "mockdata/MoсkTacker";
import { targetsText } from "mockdata/MoсkTrackersSelect";
import blockItemMock from "mockdata/UserProfileBlocks";

enum AnswerTypeEnum {
    buttons,
    text,
    multiselect
}

type AnswerType = keyof typeof AnswerTypeEnum
type AnswerValue = number | string | Array<IAnswer>

export const defaultOption: IAnswer = { value: null, label: 0 }

interface IEmotions {
    name: string;
    score: number;
}

export interface IDiaryData {
    title: string;
    description: string;
    eventsEmotions: IEmotions[];
    diaryEmotions: IEmotions[];
    done: string;
    willDo: string;
}

export interface ITrackerAnswer {
    type: AnswerType,
    value?: AnswerValue | null
}
const defaultTrackerAnswers: Array<ITrackerAnswer> = [
    { type: 'buttons', value: null},
    { type: 'text', value: null },
    { type: 'multiselect', value: [defaultOption] },
    { type: 'multiselect', value: [defaultOption] },
    { type: 'text', value: null },
    { type: 'text', value: null }
]

export default class Store {
    user = {} as IUser
    isAuth = false
    isLoading = false
    checkListBlocks = blockItemMock
    chatOpened = false
    trackerAnswers?: IDiaryData
    tempTrackerAnswers: Array<ITrackerAnswer> = defaultTrackerAnswers
    authError = false

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
        if(this) this.tempTrackerAnswers[index].value = answers
    }

    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error)
            this.authError = true;
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
    parseTrackersData(data: ITrackerAnswer[]): IDiaryData{
        let tempData: IDiaryData = {
            title: (ButtonsMock[data[0].value as number]),
            description: (data[1].value as string),
            eventsEmotions: (data[2].value as Array<IAnswer>).map((
                val
            ) =>{
                return {name: targetsText.find((v) => v.value === val.value)?.label, score: val.value} as IEmotions
            }),
            diaryEmotions: (data[3].value as Array<IAnswer>).map((
                val
            ) =>{
                return {name: targetsText.find((v) => v.value === val.value)?.label, score: val.value} as IEmotions
            }),
            done: (data[4].value as string),
            willDo: (data[5].value as string)
        }
        return tempData
    }

    async setTrackersData(date: Date){
        try {
            const response = await TrackerService.setTrackersData(date, this.tempTrackerAnswers)
            console.log(response)
            if(response.data === null) this.trackerAnswers = undefined
            else this.trackerAnswers = this.parseTrackersData(response.data)
            return response.data
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async getTrackersData(date: Date){
        try {
            const response = await TrackerService.getTrackersData(date)
            console.log(response)
            if(response.data === null) {
                this.trackerAnswers = undefined;
                this.tempTrackerAnswers = defaultTrackerAnswers;
            } 
            else 
            {
                this.trackerAnswers = this.parseTrackersData(response.data);
                this.tempTrackerAnswers = response.data;
            }
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
