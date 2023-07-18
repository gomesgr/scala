export type Funcao = {
    id: number,
    nome: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}
export const urlFuncao: string = 'http://localhost:8080/api/funcao'

export type Membro = {
    id: number,
    nome: string,
    telefone: string,
    ativo: string,
    administrador: string,
    usuario: string,
    provedor: string,
    exerceSet: Array<{
        id: number,
        membro: any,
        funcao: any
    }>
}
export const urlMembro: string = 'http://localhost:8080/api/membro'

export type CultoBool = {
    culto: Culto | null,
    existe: boolean
}

export type Culto = {
    data: number,
    nome: string
}
export const urlCulto: string = 'http://localhost:8080/api/culto'

export interface FuncaoObject {
    selectedFuncao: Funcao | null
}

export interface MembroObject {
    selectedMembro: Membro | null
}