import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./Text";
import colors from "../config/colors";
import { Item } from "./Picker";

interface Props {
  item: Item;
  onPress?: () => void;
}

const PickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  text: {
    padding: 10,
    fontSize: 15,
  },
});

export default PickerItem;
