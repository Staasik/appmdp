import axios from 'axios'

export const MAIN_IP = '178.57.41.246'
export const API_URL = process.env.NODE_ENV == 'development' ? `http://localhost:5000/api` : `http://${MAIN_IP}:5000/api`
export const UPLOADS_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:5000/uploads' : `http://${MAIN_IP}:5000/uploads`

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    if (config.headers) config.headers.Authorization = `${localStorage.getItem('token')}`
    return config
})

export default api