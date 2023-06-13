import { ApiResponse } from "apisauce"
import { User } from "./auth"
import client from "./client"


export interface UserInfo {
    name: string
    email: string
    password: string
    type: 'UserInfo'
}

const register = (userInfo: UserInfo): Promise<ApiResponse<User, Error>> => client.post('/users', userInfo)

export default {
    register
}