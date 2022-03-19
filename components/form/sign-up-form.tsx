import React from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '../data-components/button'
import { PageType } from '../types'
import Input from './input-component'
import TextBox from './text-box-component'
import useTranslation from 'next-translate/useTranslation'

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
      className={`w-full max-w-wrp bg-light shadow-4xl rounded-xl p-4 xl:place-self-auto xl:mt-[-100px] xl:mb-[20px] max-w-[650px]`}
    >
      <div className="p-5">
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
            label="phone"
            text={data.common.contactUsFormPhone}
            formik={formik}
            touch={formik.touched.phone}
            error={formik.errors.phone}
          />
        </div>

        <TextBox
          label="text"
          text={data.common.contactUsFormMessage}
          formik={formik}
        />
        <Button
          className={
            'text-lg md:text-2xl font-bold bg-header-blue text-light px-8 py-2 rounded-full mt-10 font-bold mb-10'
          }
          type="submit"
          text={data.common.contactUsFormSendButton}
        />
      </div>
    </form>
  )
}
function useField(props: any): [any, any, any] {
  throw new Error('Function not implemented.')
}
