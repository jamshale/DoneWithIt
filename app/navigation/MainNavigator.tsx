import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import useNotifications from "../hooks/useNotifications"
import ListingEditScreen from "../screens/ListingEditScreen"
import AccountNavigator from "./AccountNavigator"
import FeedNavigator from "./FeedNavigator"
import NewListingButton from "./NewListingButton"
import routes from "./routes"

type TabParamList = {
  Feed: undefined
  ListingEdit: undefined
  AccountNavigator: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}

const Tab = createBottomTabNavigator<TabParamList>()

const MainNavigator = () => {
  useNotifications()
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => {
                navigation.navigate(routes.LISTING_EDIT)
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          title: "Account",
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
