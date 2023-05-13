import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3335'
})

api.interceptors.request.use(async (config) => {
    try {
        const token = localStorage.getItem('@my-companies:authToken')
        const parsedToken = JSON.parse(token!)
        if (token) {
            config.headers!.Authorization = `Bearer ${parsedToken}`
        }
    } catch (error) {
        console.log(error)
    }
    return config
})