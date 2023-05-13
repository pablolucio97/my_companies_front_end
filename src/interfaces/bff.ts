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

interface IRegisterPlaceRequest {
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    company_id: string;
}


export type {
    IAuthUserResponse,
    IAuthRequest,
    IRegisterUserRequest,
    IRegisterCompanyRequest,
    IRegisterPlaceRequest
 }