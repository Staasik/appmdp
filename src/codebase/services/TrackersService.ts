import api from "codebase/http/index"
import { AxiosResponse } from "axios"
import { ITrackerAnswer } from "codebase/store/store"


export default class TrackerService {
    static async setTrackersData(date: Date, data: ITrackerAnswer[]): Promise<AxiosResponse<ITrackerAnswer[] | null>>{
        return api.post<ITrackerAnswer[] | null>('/setTrackersData', {date, data})
    }

    static async getTrackersData(date: Date): Promise<AxiosResponse<ITrackerAnswer[] | null>>{
        return api.post<ITrackerAnswer[] | null>('/getTrackersData', { date })
    }

    static async getFilledDates(): Promise<AxiosResponse<string[] | null>>{
        return api.get<string[] | null>('/getFilledDates')
    }
}