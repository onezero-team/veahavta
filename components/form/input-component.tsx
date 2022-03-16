import { FormikProps } from 'formik'
import React from 'react'
import { FormModel } from './sign-up-form'

export default function Input(props: FormikProps<FormModel>) {
  return (
    <div className="grid grid-rows-2">
      <label
        htmlFor="firstName"
        className="text-lg md:text-xl self-center"
      ></label>
      <input
        className="rounded-lg border-solid box-border shadow-4xl"
        id="firstName"
        name="firstName"
        type="text"
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        // value={props.values.firstName}
      />
    </div>
  )
}
