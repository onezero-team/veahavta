import React from 'react'

export default function Input({ label, ...props }: any) {
  return (
    <div>
      <div className="grid grid-rows-2">
        <label
          htmlFor={label}
          className="place-self-start text-lg md:text-xl self-center pb-4 grid grid-cols-2 grid-cols-auto-1fr gap-2"
        >
          {props.text}
        </label>
        <input
          className="rounded-lg border-solid box-border shadow-4xl min-w-[75px]"
          name={label}
          type="text"
          onBlur={props.formik.handleBlur}
          onChange={props.formik.handleChange}
          value={props.formik.values.label}
        />
      </div>
      {props.touch && props.error ? (
        <p className="text-xs text-[#f44336] self-center">{props.error}</p>
      ) : null}
    </div>
  )
}
