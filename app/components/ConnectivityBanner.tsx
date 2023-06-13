import { useNetInfo } from "@react-native-community/netinfo"
import React from "react"
import { StyleSheet, View } from "react-native"
import colors from "../config/colors"
import Text from "./Text"
import Constants from "expo-constants"

const ConnectivityBanner = () => {
  const netInfo = useNetInfo()

  return netInfo.isInternetReachable === false ? (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    justifyContent: "center",
    letterSpacing: 2,
  },
})

export default ConnectivityBanner
