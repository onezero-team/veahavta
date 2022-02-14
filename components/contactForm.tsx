import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import Input from './input'
import { Button } from './button'

export default function ContactForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive((is) => !is)
  }
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          lastname: '',
          phone: '',
          text: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500))
          alert(JSON.stringify('הפרטים נשלחו בהצלחה!'))
        }}
      >
        <Form className="bg-light h-[500px] rounded-lg -translate-y-20 p-10 basis-1/2">
          <div className=" grid grid-cols-2 gap-6">
            <Input
              value={firstName}
              onChange={setFirstName}
              label="שם פרטי"
              type="text"
              name="firstName"
              className="border-2 border-stone h-10 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-none "
            />
            <Input
              value={lastName}
              onChange={setLastName}
              label="שם משפחה"
              type="text"
              name="lastName"
              className="border-2 border-stone h-10 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-none"
            />
            <Input
              value={email}
              onChange={setEmail}
              label="מייל"
              type="email"
              name="email"
              className="h-10 border-2 border-stone rounded-lg shadow-sm focus:outline-none focus:ring focus:border-none"
            />
            <Input
              value={phone}
              onChange={setPhone}
              label="טלפון"
              type="phon"
              name="phon"
              className="shadow-sm h-10 border-2 border-stone rounded-lg focus:outline-none focus:ring focus:border-none"
            />
            <div className="col-span-2">
              <Input
                className="w-[100%] border-2 border-stone h-24 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-none flex-initial"
                value={note}
                onChange={setNote}
                label="מה תרצו לאמר לנו?"
                type="text"
                name="note"
              />
              <Button
                type="submit"
                className={`inline-flex items-center bg-primary text-light mt-5 hover:bg-light hover:text-primary hover:border border-primary`}
                onClick={toggleClass}
              >
                <p className="px-3">שליחה</p>
                {isActive && (
                  <svg
                    className="animate-spin mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
