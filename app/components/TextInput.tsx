import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"

import defaultStyles from "../config/styles"

export interface AppTextInputProps extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  width?: string | number
  value: string
}

const AppTextInput = ({
  autoCapitalize,
  autoCorrect,
  icon,
  keyboardType,
  onBlur,
  onChangeText,
  placeholder,
  secureTextEntry,
  width = "100%",
  value,
}: AppTextInputProps) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={22}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={defaultStyles.text}
        value={value}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 12,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
})
