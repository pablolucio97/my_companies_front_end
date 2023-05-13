import { IAuthRequest, IRegisterRequest } from 'interfaces/bff'
import { api } from './api'
import { AxiosError } from 'axios'

async function getCompanies(userId: string) {
    try {
        const response = await api.get(`/empresas/list-by-user/${userId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

async function authenticateUser(data: IAuthRequest) {
    const response = await api.post('/usuarios/auth', data)
        .then(response => {
            return response
        })
        .catch((error: AxiosError) => {
            return error.response?.data
        })
    return response
}

async function registerUser(data: IRegisterRequest) {
    const response = await api.post('/usuarios/create', data)
        .then(response => {
            return response.data
        })
        .catch((error: AxiosError) => {
            return error.response?.data
        })
    return response
}

async function deleteCompany(id: string) {
    try {
        const response = await api.delete(`/empresas/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }

}

export { getCompanies, authenticateUser, registerUser, deleteCompany }