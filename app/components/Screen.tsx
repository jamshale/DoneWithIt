import Constants from "expo-constants";
import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

interface Props {
  children: ReactNode;
  color?: string;
}

const Screen = ({ children, color = colors.white }: Props) => {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: color }]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
