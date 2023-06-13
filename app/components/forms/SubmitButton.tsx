import { useFormikContext } from "formik";
import React from "react";
import Button from "../Button";

interface Props {
  title: string;
}

const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
