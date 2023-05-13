interface ICompany {
    id: string;
    nome: string
    website: string
    cnpj: string
}

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


export type { ICompany, IPlace }