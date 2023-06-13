import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface Props {
  name: string;
}

const FormImagePicker = ({ name }: Props) => {
  // Todo: Figure out how to destructure these varibles immediately
  const formik = useFormikContext();
  const values = formik.values as any;
  const errors = formik.errors as any;
  const setFieldValue = formik.setFieldValue;
  const touched = formik.touched;

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      values[name].filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name as keyof typeof touched]}
      />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
