import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../Text";

interface Props {
  error: string | undefined;
  visible?: boolean;
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
