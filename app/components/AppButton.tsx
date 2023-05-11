import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface Props {
  color?: "primary" | "secondary";
  title: string;
  onPress: () => void;
}

const AppButton = ({ color = "primary", title, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: colors[color] }}
      onPress={onPress}
    >
      <Text style={styles.tagline}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    width: "100%",
  },
  tagline: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
