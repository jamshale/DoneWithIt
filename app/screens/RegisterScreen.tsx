import React, { useEffect, useState } from "react"
import * as Yup from "yup"
import Screen from "../components/Screen"
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms"

import authApi from "../api/auth"
import usersApi, { UserInfo } from "../api/users"
import useAuth from "../auth/useAuth"
import useApi from "../hooks/useApi"
import ActivityIndicator from "../components/ActivityIndicator"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(30).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

interface RegisterAuth {
  name: string
  email: string
  password: string
}

const RegisterScreen = () => {
  const registerApi = useApi<UserInfo>(usersApi.register)
  const loginApi = useApi<string>(authApi.login)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )
  const { login } = useAuth()

  const handleSubmit = async (userInfo: UserInfo) => {
    const response = await registerApi.request(userInfo)
    if (!response.ok) {
      if (response.data) return setErrorMessage(response.data.message)
      else
        return setErrorMessage(
          "Unknown error has occured when registering user."
        )
    }
    if (response.data) handleRegistrationSuccess(response.data)
  }

  const handleRegistrationSuccess = async (userInfo: UserInfo) => {
    const response = await loginApi.request({
      email: userInfo.email,
      password: userInfo.password,
    })
    if (!response.ok) {
      if (response.data) return setErrorMessage(response.data.message)
      else
        return setErrorMessage("Unknown error has occured when login user in.")
    }
    login(response.data)
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <Form<RegisterAuth>
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={errorMessage}
            visible={errorMessage !== undefined}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            keyboardType="default"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  )
}

export default RegisterScreen
