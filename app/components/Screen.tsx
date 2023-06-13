import Constants from "expo-constants"
import React, { ReactNode } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import colors from "../config/colors"
import ConnectivityBanner from "./ConnectivityBanner"
import AppText from "./Text"

interface Props {
  children: ReactNode
  color?: string
  paddingHorizontal?: number
}

const Screen = ({
  children,
  color = colors.white,
  paddingHorizontal = 20,
}: Props) => {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: color }]}>
      <View style={{ paddingHorizontal }}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
})
