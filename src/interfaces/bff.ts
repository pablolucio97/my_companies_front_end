interface IAuthUserResponse {
    message: string
    data: {
        usuario: {
            nome: string
            email: string
            id: string
        };
        token: {
            token: string
        }
    }
}

interface IAuthRequest {
    email: string;
    senha: string;
}

interface IRegisterUserRequest {
    nome: string
    email: string
    senha: string
}
interface IRegisterCompanyRequest {
    nome: string
    website: string
    cnpj: string
    user_id: string
}

export type {
    IAuthUserResponse,
    IAuthRequest,
    IRegisterUserRequest,
    IRegisterCompanyRequest
 }