import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'
import { User } from '../api/auth'

const key = "authToken"

const storeToken = async (authToken: string) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log('Error storing the auth token', error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("Error get the auth token", error)
    }
}

const getUser = async (): Promise<User | undefined> => {
    const token = await getToken()
    return token ? jwtDecode(token) : undefined
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error removing the auth token', error)
    }
}

export default {
    getUser,
    getToken,
    storeToken,
    removeToken
}