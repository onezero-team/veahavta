import React from 'react'
import { useFormik } from 'formik'
import { Button } from '../button'
import { PageType } from '../Types'
import { useState } from 'react'

function validateForm(values: {
  firstName: any
  lastName: any
  email: any
  phone?: string
  text?: string
}) {
  // valuse.name values.email
  //errors.name errors.email
  let errors: { [k: string]: any } = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (
    !values.phone.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    )
  ) {
    errors.phone = 'Invalid number'
  }

  if (errors.email || errors.firstName || errors.lastName || errors.phone) {
    return errors
  }
  return null
}

export default function SignupForm({ data }: PageType) {
  const [print, setPrint] = useState([''])
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      text: '',
    },
    onSubmit: (values) => {
      let res = validateForm(values)

      if (res) {
        let firstNameError = res.firstName ? res.firstName : null
        let lastNameError = res.lastName ? res.lastName : null
        let emailError = res.email ? res.email : null
        let phoneError = res.phone ? res.phone : null

        alert(
          'Error!\n \n' +
            (firstNameError ? `first name: ${firstNameError}\n` : '') +
            (lastNameError ? `last name: ${lastNameError}\n` : '') +
            (emailError ? `email: ${emailError}\n` : '') +
            (phoneError ? `phone: ${phoneError}` : ''),
        )
      } else {
        alert('Succes!' + values)
      }
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="left-[180px] h-3/5 grid p-4 justify-items-center text-3xl font-bold bg-[#FFFFFF] border border-[#FFFFFF]
        shadow-[0px_0px_4px_rgba(0,0,0,0.25)] box-border boreder-solid rounded-3xl "
    >
      <div className="w-11/12">
        <div className="grid grid-cols-2 ">
          <div className="grid grid-rows-2">
            <label htmlFor="email" className="text-xl self-center">
              {data.common.contactUsFormFirstName}
            </label>
            {formik.errors.firstName ? (
              <div className="">{formik.errors.firstName}</div>
            ) : null}
            <input
              className="w-11/12 h-[60px] border rounded-lg border-solid border-[#FFFFFF] box-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className="grid grid-rows-2 ">
            <label
              htmlFor="email"
              className="place-self-start text-xl pr-7 self-center"
            >
              {data.common.contactUsFormLastName}
            </label>
            <input
              className="w-11/12 h-[60px] border rounded-lg border-solid border-[#FFFFFF] box-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)] place-self-end"
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
          <div className="grid grid-rows-2 ">
            <label
              htmlFor="email"
              className="place-self-start text-xl self-center"
            >
              {data.common.contactUsFormEmail}
            </label>
            <input
              className="w-11/12 h-[60px] border rounded-lg border-solid border-[#FFFFFF] box-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)] "
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="grid grid-rows-2 ">
            <label
              htmlFor="email"
              className="place-self-start text-xl pr-7 self-center"
            >
              {data.common.contactUsFormPhone}
            </label>
            <input
              className="w-11/12 h-[60px] border rounded-lg border-solid border-[#FFFFFF] box-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)] place-self-end"
              id="phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
        </div>

        <div className="grid pt-4">
          <label htmlFor="email" className="place-self-start text-xl pb-4">
            {data.common.contactUsFormMessage}
          </label>
          <input
            className="h-[145px] border rounded-lg border-solid border-[#FFFFFF] box-border shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
            id="text"
            name="text"
            type="textbox"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
        </div>
        <Button
          className={
            'text-2xl font-bold bg-[#4E47F9] text-light px-8 py-2 rounded-full mt-10 font-bold'
          }
          type="submit"
        >
          {data.common.contactUsFormSendButton}
        </Button>
      </div>
    </form>
  )
}
