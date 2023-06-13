import React from 'react'
import { User } from '../api/auth'

interface UserContext {
    user?: User
    setUser: (user?: User) => void
}


const AuthContext = React.createContext<UserContext>({ user: undefined, setUser: () => { return } })

export default AuthContext