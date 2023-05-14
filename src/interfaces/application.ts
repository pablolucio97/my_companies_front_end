interface IPlace {
    id: string;
    nome: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    company_id?: string;
}
interface ICompany {
    id: string;
    nome: string
    website: string
    cnpj: string
    places?: IPlace[]
}

interface IUser {
    nome: string;
    id: string;
}

export type { ICompany, IPlace, IUser }