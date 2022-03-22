import React from 'react'

export default function Input({ label, ...props }: any) {
  return (
    <div>
      <div className="grid grid-rows-2">
        <label
          htmlFor={label}
          className="place-self-start text-lg md:text-xl self-center md:pb-2.5 grid gap-2.5"
        >
          {props.text}
        </label>
        <input
          className="rounded-lg border-solid box-border shadow-4xl min-w-[75px] px-2 focus:rounded-lg"
          name={label}
          type="text"
          onBlur={props.formik.handleBlur}
          onChange={props.formik.handleChange}
          value={props.formik.values.label}
        />
      </div>
      {props.touch && props.error ? (
        <p className="text-sm md:text-base text-[#f44336] self-center pt-1 md:pt-2.5">
          {props.error}
        </p>
      ) : null}
    </div>
  )
}
