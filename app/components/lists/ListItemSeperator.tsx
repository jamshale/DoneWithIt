import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

const ListItemSeperator = () => {
  return <View style={styles.separator} />;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
