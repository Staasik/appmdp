import axios from 'axios'

export const MAIN_IP = 'localhost'
export const API_URL = process.env.NODE_ENV == 'development' ? `http://localhost:5000/api` : `http://${MAIN_IP}:5000/api`
export const UPLOADS_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:5000/uploads' : `http://localhost/uploads`

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    if (config.headers) config.headers.Authorization = `${localStorage.getItem('token')}`
    return config
})

export default api