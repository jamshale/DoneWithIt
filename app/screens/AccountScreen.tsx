import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { FlatList, StyleSheet, View } from "react-native"

import useAuth from "../auth/useAuth"
import Icon from "../components/Icon"
import { ListItemSeperator } from "../components/lists"
import ListItem from "../components/lists/ListItem"
import Screen from "../components/Screen"
import colors from "../config/colors"

interface IconOption {
  color?: string
  name: keyof typeof MaterialCommunityIcons.glyphMap
  title: string
  targetScreen: "Messages"
}

const AccountScreen = () => {
  const { user, logout } = useAuth()
  const { navigate } = useNavigation()

  const options: IconOption[] = [
    {
      color: colors.primary,
      name: "format-list-bulleted",
      title: "My Listings",
      targetScreen: "Messages",
    },
    {
      color: colors.secondary,
      name: "email",
      title: "My Messages",
      targetScreen: "Messages",
    },
  ]

  return (
    <Screen color={colors.light} paddingHorizontal={0}>
      <View style={styles.container}>
        <ListItem
          title={user?.name || ""}
          subTitle={user?.email}
          image={require("../assets/jamie.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={options}
          keyExtractor={(option) => option.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              showChevrons
              IconComponent={
                <Icon name={item.name} backgroundColor={item.color} />
              }
              onPress={() => navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor={colors.warning} />}
        onPress={() => logout()}
      />
    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
})
