import React from 'react'

export default function TextBox({ label, ...props }: any) {
  return (
    <div className="grid pt-4">
      <label
        htmlFor={label}
        className="place-self-start text-lg md:text-xl pb-2 self-center"
      >
        {props.text}
      </label>
      <input
        className="h-24 md:h-36 rounded-lg border-solid box-border shadow-4xl"
        name={label}
        type="text"
        onBlur={props.formik.handleBlur}
        onChange={props.formik.handleChange}
        value={props.formik.values.label}
      />
    </div>
  )
}
