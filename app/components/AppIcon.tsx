import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  backgroundColor?: string;
  iconColor?: "white";
  size?: number;
}

const AppIcon = ({
  name,
  iconColor = "white",
  backgroundColor = "black",
  size = 40,
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
