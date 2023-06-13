import { FormikHelpers } from "formik"
import React, { useState } from "react"
import * as Yup from "yup"
import listingsApi, { Listing } from "../api/listings"
import CategoryPickerItem from "../components/CategoryPickerItem"
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms"
import FormImagePicker from "../components/forms/FormImagePicker"
import { Item } from "../components/Picker"
import Screen from "../components/Screen"
import useLocation from "../hooks/useLocation"
import UploadScreen from "./UploadScreen"

const validationSchema = Yup.object().shape({
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().optional().label("Description"),
  price: Yup.number().required().min(1).max(10_000).label("Price"),
  title: Yup.string().required().min(1).label("Title"),
  images: Yup.array().min(1, "Please select at least one image"),
})

const categories: Item[] = [
  {
    value: 1,
    label: "Furniture",
    icon: "floor-lamp",
    color: "#fc5c65",
  },
  {
    value: 2,
    label: "Cars",
    icon: "car",
    color: "#fd9644",
  },
  {
    value: 3,
    label: "Cameras",
    icon: "camera",
    color: "#fed330",
  },
  {
    value: 4,
    label: "Games",
    icon: "cards",
    color: "#26de81",
  },
  {
    value: 5,
    label: "Clothing",
    icon: "shoe-heel",
    color: "#2bcbba",
  },
  {
    value: 6,
    label: "Sports",
    icon: "basketball",
    color: "#45aaf2",
  },
  {
    value: 7,
    label: "Movies & Music",
    icon: "headphones",
    color: "#4b7bec",
  },
  {
    value: 8,
    label: "Books",
    icon: "book-open-variant",
    color: "#a55eea",
  },
  {
    value: 9,
    label: "Other",
    icon: "application",
    color: "#778ca3",
  },
]

const ListingEditScreen = () => {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const initialValues: Listing = {
    id: 0,
    category: undefined,
    description: "",
    images: [],
    price: undefined,
    title: "",
  }

  const handleSubmit = async (
    listing: Listing,
    { resetForm }: FormikHelpers<Listing>
  ) => {
    setProgress(0)
    setUploadVisible(true)
    const response = await listingsApi.createListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    )

    if (!response.ok) {
      setUploadVisible(false)
      return alert("Could not save the listing")
    }
    resetForm()
  }

  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form<Listing>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          items={categories}
          width="50%"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </Form>
    </Screen>
  )
}

export default ListingEditScreen
