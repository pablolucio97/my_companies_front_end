import { IAuthRequest, IRegisterCompanyRequest, IRegisterPlaceRequest, IRegisterUserRequest } from 'interfaces/bff'
import { api } from './api'
import { AxiosError } from 'axios'
import { ICompany, IPlace } from 'interfaces/application'

async function getCompanies(userId: string, itemsPerPage?: number, page?: number) {
    try {
        const response = await api
            .get(`/empresas/list-by-user/${userId}?itemsPerPage=${itemsPerPage}&page=${page}`)
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

async function registerUser(data: IRegisterUserRequest) {
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

async function updateCompany(company: ICompany) {
    const data = {
        nome: company.nome,
        website: company.website,
        cnpj: company.cnpj,
    }
    try {
        const response = await api.put(`/empresas/update/${company.id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function registerCompany(data: IRegisterCompanyRequest) {
    const requestData = {
        nome: data.nome,
        website: data.website,
        cnpj: data.cnpj,
        user_id: data.user_id
    }
    try {
        const response = await api.post('/empresas/create', requestData)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function getPlaces(companyId: string, itemsPerPage?: number, page?: number) {
    try {
        const response = await api
            .get(`/locais/list-by-company/${companyId}?itemsPerPage=${itemsPerPage}&page=${page}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function registerPlace(data: IRegisterPlaceRequest) {
    const requestData = {
        nome: data.nome,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
        company_id: data.company_id
    }
    try {
        const response = await api.post('/locais/create', requestData)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function updatePlace(data: IPlace) {
    const requestData = {
        nome: data.nome,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
    }
    try {
        const response = await api.put(`/locais/update/${data.id}`, requestData)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

async function deletePlace(id: string) {
    try {
        const response = await api.delete(`/locais/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {
    getCompanies,
    authenticateUser,
    registerUser,
    deleteCompany,
    updateCompany,
    registerCompany,
    getPlaces,
    registerPlace,
    updatePlace,
    deletePlace
}