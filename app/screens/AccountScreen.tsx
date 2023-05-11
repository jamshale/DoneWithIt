import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import React from "react";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItemSeperator } from "../components/ListItemSeperator";

interface IconOption {
  color?: string;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
}

const AccountScreen = () => {
  const options: IconOption[] = [
    {
      color: colors.primary,
      name: "format-list-bulleted",
      title: "My Listings",
    },
    {
      color: colors.secondary,
      name: "email",
      title: "My Messages",
    },
  ];

  return (
    <Screen color={colors.light}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={options}
          keyExtractor={(option) => option.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon name={item.name} backgroundColor={item.color} />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <AppIcon name="logout" backgroundColor={colors.warning} />
        }
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
