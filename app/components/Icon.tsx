import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

interface Props {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  backgroundColor?: string;
  iconColor?: "white";
  size?: number;
}

const Icon = ({
  name = "cross",
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

export default Icon;
