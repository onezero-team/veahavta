import React from 'react'
import { Field, Form } from 'formik'

export default function Input({
  value,
  onChange,
  name,
  type,
  label,
  className,
}: any) {
  return (
    <div id="" className="text-right">
      <label id="label" className="font-bold">
        {label}
      </label>
      <br />
      <Field
        name={name}
        type={type}
        className={className}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
      ></Field>
    </div>
  )
}
