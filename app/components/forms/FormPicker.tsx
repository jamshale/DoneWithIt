import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useFormikContext } from "formik"
import React, { ComponentType, useState } from "react"
import Picker, { Item } from "../Picker"
import ErrorMessage from "./ErrorMessage"

interface Props {
  name: string
  items: Item[]
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  numberOfColumns?: number
  PickerItemComponent: ComponentType<{
    item: Item
    onPress: () => void
  }>
  placeholder?: string
  width?: string
}

const FormPicker = ({
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  items,
  width,
  icon,
}: Props) => {
  const [selected, setSelected] = useState<Item>()
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<any>()
  return (
    <>
      <Picker
        icon={icon}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => {
          setSelected(item)
          setFieldValue("category", item)
        }}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage
        error={errors[name]?.toString()}
        visible={touched[name]?.valueOf() === true}
      />
    </>
  )
}

export default FormPicker
