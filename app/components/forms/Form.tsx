import { Formik, FormikHelpers, FormikProps, FormikValues } from "formik"
import React, { MutableRefObject, ReactNode, RefObject } from "react"
import { StyleSheet } from "react-native"

interface Props<T> {
  initialValues: FormikValues & T
  children: ReactNode
  validationSchema: object
  onSubmit: (
    values: any,
    helpers: FormikHelpers<FormikValues & T>
  ) => Promise<void>
}

const Form = <T,>({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: Props<T>) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, helpers) => {
      onSubmit(values, helpers)
    }}
    validationSchema={validationSchema}
  >
    {() => <>{children}</>}
  </Formik>
)

export default Form

const styles = StyleSheet.create({})
