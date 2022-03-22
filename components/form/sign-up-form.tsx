import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../data-components/button'
import { PageType } from '../types'
import Input from './input-component'
import TextBox from './text-box-component'

export default function SignupForm({ data }: PageType) {
  const [success, setSuccess] = useState(false)
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
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
      tel: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    }),
    onSubmit: (values) => {
      setSuccess(true)
      
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`w-full max-w-wrp bg-light shadow-4xl rounded-xl p-4 xl:place-self-auto xl:mt-[-100px] xl:mb-[20px] max-w-[650px]`}
    >
      <div className="p-2.5 md:p-5">
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="firstName"
            text={data.common.contactUsFormFirstName}
            formik={formik}
            touch={formik.touched.firstName}
            error={formik.errors.firstName}
          />
          <Input
            label="lastName"
            text={data.common.contactUsFormLastName}
            formik={formik}
            touch={formik.touched.lastName}
            error={formik.errors.lastName}
          />
          <Input
            label="email"
            text={data.common.contactUsFormEmail}
            formik={formik}
            touch={formik.touched.email}
            error={formik.errors.email}
          />
          <Input
            label="tel"
            text={data.common.contactUsFormPhone}
            formik={formik}
            touch={formik.touched.tel}
            error={formik.errors.tel}
          />
        </div>

        <TextBox
          label="text"
          text={data.common.contactUsFormMessage}
          formik={formik}
        />
        {!success && (
          <Button
            className={
              'text-lg md:text-2xl font-bold bg-blue text-light px-8 py-2 rounded-full mt-10 font-bold mb-10'
            }
            type="submit"
            text={data.common.contactUsFormSendButton}
          />
        )}
        {success && (
          <div className="text-lg md:text-2xl font-bold bg-success text-light px-8 py-2 rounded-full mt-10 font-bold mb-10 max-w-[150px] text-center">
            form sent
          </div>
        )}
      </div>
    </form>
  )
}
