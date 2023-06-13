import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useFormikContext } from "formik"
import React from "react"
import { TextInputProps } from "react-native"
import TextInput from "../TextInput"
import ErrorMessage from "./ErrorMessage"

interface Props extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  name: string
  width?: string | number
}

const FormField = ({
  autoCapitalize,
  autoCorrect,
  icon,
  keyboardType,
  maxLength,
  multiline = false,
  name,
  numberOfLines = 1,
  placeholder,
  secureTextEntry = false,
  width = "100%",
}: Props) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<any>()

  return (
    <>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        icon={icon}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={values[name]?.toString()}
        width={width}
      />
      <ErrorMessage
        error={errors[name]?.toString()}
        visible={touched[name]?.valueOf() === true}
      />
    </>
  )
}

export default FormField
