import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import colors from "../config/config";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.primary,
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 40,
    right: 30,
  },
});
