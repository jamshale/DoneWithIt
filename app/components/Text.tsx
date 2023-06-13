import React, { ReactNode } from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

interface Props {
  children: ReactNode;
  style?: object;
  numberOfLines?: number;
}

const AppText = ({ children, style, numberOfLines }: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
