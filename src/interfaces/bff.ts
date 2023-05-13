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

interface IRegisterRequest {
    nome: string
    email: string
    senha: string
}

export type { IAuthUserResponse, IAuthRequest, IRegisterRequest }