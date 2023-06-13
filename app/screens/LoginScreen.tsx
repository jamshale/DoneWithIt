import React, { useState } from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"

import authApi, { LoginAuth } from "../api/auth"
import useAuth from "../auth/useAuth"
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms"
import Screen from "../components/Screen"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (loginAuth: LoginAuth) => {
    const response = await authApi.login(loginAuth)
    if (!response.ok) return setLoginFailed(true)
    setLoginFailed(false)
    login(response.data)
  }

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form<LoginAuth>
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
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
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
})
