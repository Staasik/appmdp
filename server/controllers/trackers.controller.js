import _ from 'lodash';
import { trackersService } from '../services/trackers.service.js';

class TrackersController {

    async setData(req, res, next) {
        try {
            const { date, data } = req.body
            const response = await trackersService.setData(req.headers.authorization, date, data)
            if (response === null) return res.json(null)
            return res.json(response)
        } catch (error) {
            next(error)
        }
    }

    async getData(req, res, next) {
        try {
            const { date } = req.body
            const response = await trackersService.getData(req.headers.authorization, date)
            if (response === null) return res.json(null)
            return res.json(JSON.parse(response.data))
        } catch (error) {
            next(error)
        }
    }

    async getFilledDates(req, res, next) {
        try {
            const trackers = await trackersService.getFilledDates(req.headers.authorization)
            if (trackers && trackers.lenght !== 0) {
                const response = trackers.map((tracker) => tracker.date)
                return res.json(response)
            }
            return res.json(null)
        } catch (error) {
            next(error)
        }
    }
}

export const trackersController = new TrackersController();