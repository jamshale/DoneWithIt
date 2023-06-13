import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ComponentType, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./Text";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

export interface Item {
  label: string;
  value: number;
  color: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

export interface PickerProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  items: Item[];
  numberOfColumns: number;
  onSelectItem: (item: Item) => void;
  PickerItemComponent: ComponentType<{
    item: Item;
    onPress: () => void;
  }>;
  placeholder?: string;
  selectedItem?: Item;
  width?: string;
}

const Picker = ({
  icon,
  items,
  numberOfColumns,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  onSelectItem,
  width,
}: PickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
