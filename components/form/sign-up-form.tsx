import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Button } from '../data-components/button'
import { PageType } from '../types'

export default function SignupForm({ data }: PageType) {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      text: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Must be 2 characters or more").required("Required").max(15, "Must be 2 characters or less").required("Required"),
      lastName: Yup.string().min(2, "Must be 2 characters or more").required("Required").max(15, "Must be 2 characters or less").required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required")

    }),
    onSubmit: (values) => {
      alert('Form submitted successfully !')
    },
  })
  console.log(formik.touched);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`bg-light max-w-[650px] place-self-center  shadow-4xl rounded-xl py-4 p-4 xl:place-self-auto xl:mt-[-100px] xl:mb-[20px]`}
    >
      <div className="p-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-rows-2">
            <label
              htmlFor="firstName"
              className="text-lg md:text-xl self-center"
            >
              {data.common.contactUsFormFirstName}
            </label>
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-[#f44336]">{formik.errors.firstName}</p>
            ) : null}
            <input
              className="rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="firstName"
              name="firstName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className="grid grid-rows-2 ">
            <label
              htmlFor="lastName"
              className="place-self-start text-lg md:text-xl self-center"
            >
              {data.common.contactUsFormLastName}
            </label>
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-[#f44336]">{formik.errors.lastName}</p>) : null}
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="lastName"
              name="lastName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className="grid grid-rows-2 ">
            <label
              htmlFor="email"
              className="place-self-start text-lg md:text-xl self-center"
            >
              {data.common.contactUsFormEmail}
            </label>
            {formik.touched.email && formik.errors.email ? (
              <p className="text-[#f44336]">{formik.errors.email}</p>
            ) : null}
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="grid grid-rows-2 ">
            <label
              htmlFor="phone"
              className="place-self-start text-lg md:text-xl self-center"
            >
              {data.common.contactUsFormPhone}
            </label>
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-[#f44336]">{formik.errors.phone}</p>) : null}
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="phone"
              name="phone"
              type="tel"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
        </div>

        <div className="grid pt-4">
          <label
            htmlFor="email"
            className="place-self-start text-lg md:text-xl pb-4"
          >
            {data.common.contactUsFormMessage}
          </label>
          <input
            className="h-24 md:h-36 rounded-lg border-solid box-border shadow-4xl"
            id="text"
            name="text"
            type="textbox"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.text}
          />
        </div>
        <Button
          className={
            'text-lg md:text-2xl font-bold bg-header-blue text-light px-8 py-2 rounded-full mt-10 font-bold mb-10'
          }
          type="submit"
        >
          {data.common.contactUsFormSendButton}
        </Button>
      </div>
    </form>
  )
}
