import React from 'react'

export default function Input({ data }: { data: string }) {
  return (
    <div className="grid grid-rows-2">
      <label htmlFor="firstName" className="text-lg md:text-xl self-center">
        {data}
      </label>
      {/* {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-[#f44336]">{formik.errors.firstName}</p>
            ) : null} */}
      <input
        className="rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
        id="firstName"
        name="firstName"
        type="text"
        // onBlur={formik.handleBlur}
        // onChange={formik.handleChange}
        // value={formik.values.firstName}
      />
    </div>
  )
}
