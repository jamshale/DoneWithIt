import React from "react"
import { View, StyleSheet, Modal } from "react-native"
import Text from "../components/Text"
import * as Progress from "react-native-progress"
import colors from "../config/colors"
import LottieView from "lottie-react-native"

interface Props {
  progress: number
  visible: boolean
  onDone: () => void
}

const UploadScreen = ({ onDone, progress = 0, visible = false }: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
})

export default UploadScreen
