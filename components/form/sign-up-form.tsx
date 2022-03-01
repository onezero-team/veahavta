import React from 'react'
import { useFormik, Field } from 'formik'
import { Button } from '../data-components/button'
import { PageType } from '../types'

function validateForm(values: {
  firstName: any
  lastName: any
  email: any
  phone?: string
  text?: string
}) {
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
  const dir = data.homepage.aboutTitle.includes('b') ? 'right-40' : 'left-40'
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
        alert('Form submitted successfully !')
      }
    },
  })

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
            {formik.errors.firstName ? (
              <div className="">{formik.errors.firstName}</div>
            ) : null}
            <input
              className="rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="firstName"
              name="firstName"
              type="text"
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
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
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
              className="place-self-start text-lg md:text-xl self-center"
            >
              {data.common.contactUsFormEmail}
            </label>
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="email"
              name="email"
              type="email"
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
            <input
              className="min-h-[30px] rounded-lg border-solid box-border shadow-4xl min-w-[100px]"
              id="phone"
              name="phone"
              type="tel"
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
