import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../Text";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "../../config/colors";

interface Props {
  title: string;
  subTitle?: string;
  IconComponent?: ReactNode;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: () => ReactNode | undefined;
  showChevrons?: boolean;
}

const ListItem = ({
  title,
  subTitle,
  IconComponent,
  image,
  onPress,
  renderRightActions,
  showChevrons,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={1} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={2} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name="chevron-right"
                color={colors.medium}
                size={25}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
  },
});
