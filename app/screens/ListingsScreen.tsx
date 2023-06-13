import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { FlatList } from "react-native"
import listingsApi, { Listing } from "../api/listings"
import ActivityIndicator from "../components/ActivityIndicator"
import Button from "../components/Button"
import Card from "../components/Card"
import Screen from "../components/Screen"
import AppText from "../components/Text"
import colors from "../config/colors"
import useApi from "../hooks/useApi"
import routes from "../navigation/routes"

const ListingsScreen = () => {
  const { navigate } = useNavigation()
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi<Listing[]>(listingsApi.getListings)

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen color={colors.light}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(item: Listing) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </>
  )
}

export default ListingsScreen
