import { useContext } from "react"
import AuthContext from "./context"
import authStorage from "./storage"
import jwtDecode from 'jwt-decode'
import { User } from "../api/auth"

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext)

    const logout = () => {
        setUser(undefined)
        authStorage.removeToken()
    }

    const login = (token: string = '') => {
        const user = jwtDecode<User>(token)
        setUser(user)
        authStorage.storeToken(token)
    }
    return { user, login, logout }
}

export default useAuth