import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native"
import * as SplashScreen from "expo-splash-screen"
import React, { createRef, useEffect, useState } from "react"

import { User } from "./app/api/auth"
import AuthContext from "./app/auth/context"
import authStorage from "./app/auth/storage"
import ConnectivityBanner from "./app/components/ConnectivityBanner"
import AuthNavigator from "./app/navigation/AuthNavigator"
import MainNavigator from "./app/navigation/MainNavigator"
import navigationTheme from "./app/navigation/navigationTheme"

export default function App() {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    async function prepare() {
      await restoreUser()
      setIsReady(true)
    }

    prepare()
  }, [])

  useEffect(() => {
    async function hideSplashScreen() {
      if (isReady) await SplashScreen.hideAsync()
    }

    hideSplashScreen()
  }, [isReady])

  if (!isReady) return null

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <ConnectivityBanner />
      <NavigationContainer theme={navigationTheme}>
        {user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
