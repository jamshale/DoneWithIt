import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListingsScreen from "../screens/ListingsScreen"
import ListingDetailsScreen from "../screens/ListingDetailsScreen"
import routes from "./routes"
import { Listing } from "../api/listings"

type StackParamList = {
  Listings: undefined
  ListingDetails: Listing
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

const Stack = createNativeStackNavigator()
const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  )
}
export default FeedNavigator
