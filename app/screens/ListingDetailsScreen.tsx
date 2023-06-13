import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"
import AppText from "../components/Text"

import colors from "../config/colors"
import ListItem from "../components/lists/ListItem"
import { useRoute } from "@react-navigation/native"
import { Listing } from "../api/listings"

const ListingDetailsScreen = () => {
  const { params: listing } = useRoute() as { params: Listing }

  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"$" + listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jamie.jpg")}
            title="Jamie Hale"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ListingDetailsScreen
