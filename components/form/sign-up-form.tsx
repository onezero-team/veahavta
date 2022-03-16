import React from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '../data-components/button'
import { PageType } from '../types'

export interface FormModel {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  text: ''
}

const NameInput = (props: any) => {
  const [field, meta, helpers] = useField(props)
  const { setError, setTouched } = helpers
  return (
    <>
      <input
        type="text"
        placeholder=""
        name=""
        id=""
        style={{
          opacity: '0.76',
        }}
        className="bg-inputgray h-20 px-4 z-10 w-full mb-1 text-light hover:border text-2xl lg:text-28px"
        maxLength={20}
        {...props}
        onFocus={() => {
          setError('')
          setTouched(false)
        }}
      />
    </>
  )
}

export default function SignupForm({ data }: PageType) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      text: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required')
        .max(15, 'Must be 2 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required')
        .max(15, 'Must be 2 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid Email').required('Required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert('Form submitted successfully !')
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`w-full max-w-wrp bg-light  shadow-4xl rounded-xl p-4 xl:place-self-auto xl:mt-[-100px] xl:mb-[20px]`}
    >
      <div className="p-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="grid grid-rows-2">
              <label
                htmlFor="firstName"
                className="place-self-start text-lg md:text-xl self-center pb-4 grid grid-cols-2 grid-cols-auto-1fr gap-2"
              >
                {data.common.contactUsFormFirstName}
              </label>

              <input
                className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
                id="firstName"
                name="firstName"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-xs text-[#f44336] self-center">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="grid grid-rows-2 grid-rows-auto-1fr">
            <label
              htmlFor="lastName"
              className="place-self-start text-lg md:text-xl self-center pb-4 grid grid-cols-2 grid-cols-auto-1fr gap-2"
            >
              {data.common.contactUsFormLastName}
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-xs text-[#f44336] self-center">{formik.errors.lastName}</p>
              ) : null}
            </label>
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
              className="place-self-start text-lg md:text-xl self-center pb-4 grid grid-cols-2 grid-cols-auto-1fr gap-2"
            >
              {data.common.contactUsFormEmail}
              {formik.touched.email && formik.errors.email ? (
                <p className="text-xs text-[#f44336] self-center">{formik.errors.email}</p>
              ) : null}
            </label>
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
              className="place-self-start text-lg md:text-xl self-center pb-4 grid grid-cols-2 grid-cols-auto-1fr gap-2"
            >
              {data.common.contactUsFormPhone}
              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-xs text-[#f44336] self-center">{formik.errors.phone}</p>
              ) : null}
            </label>
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
            className="place-self-start text-lg md:text-xl pb-4 self-center"
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
function useField(props: any): [any, any, any] {
  throw new Error('Function not implemented.')
}

