import { ApiResponse } from 'apisauce'
import client from './client'

export interface User {
    email: string
    iat: number
    name: string
    userId: number
}

interface Error {
    error: string
}

export interface LoginAuth {
    email: string
    password: string
}

const login = (loginAuth: LoginAuth): Promise<ApiResponse<string, Error>> => client.post('/auth', loginAuth)


export default {
    login,
}