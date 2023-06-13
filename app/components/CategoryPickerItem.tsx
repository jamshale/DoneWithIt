import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import { Item } from "./Picker";
import AppText from "./Text";

interface Props {
  item: Item;
  onPress: () => void;
}

const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.box}>
        <Icon backgroundColor={item.color} name={item.icon} size={80} />
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  text: {
    padding: 10,
    fontSize: 15,
  },
});

export default CategoryPickerItem;
