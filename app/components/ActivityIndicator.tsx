import LottieView from "lottie-react-native"
import React from "react"
import { View, StyleSheet } from "react-native"

interface Props {
  visible: boolean
}

const ActivityIndicator = ({ visible = false }: Props) => {
  if (!visible) return null
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  overlay: {
    opacity: 0.8,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    zIndex: 1,
    position: "absolute",
  },
})

export default ActivityIndicator
