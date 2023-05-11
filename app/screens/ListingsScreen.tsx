import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Card from "../components/Card";

const ListingsScreen = () => {
  const listings = [
    {
      id: 1,
      image: require("../assets/jacket.jpg"),
      title: "Red jacket for sale",
      description: "$100",
    },
    {
      id: 2,
      image: require("../assets/couch.jpg"),
      title: "Couch in great condition",
      description: "$1000",
    },
  ];
  return (
    <Screen color={colors.light}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
