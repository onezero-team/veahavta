import React from 'react'
import { PageType } from '../Types'
import ContactData from '../contactdata'
import { Button } from '../button'
import SignupForm from '../form/signUpForm'

export default function ContactUs({ data }: PageType) {
  return (
    <>
      <section className="grid grid-cols-2 place-items-center mt-64 bg-[#F4F3FD] h-[680px]">
        {/* change hirght of the section */}
        <div className="grid ">
          <div className="w-8/12">
            <Button className={'text-3xl bg-[#FFFFFF] text-[#4E47F9] px-8 py-2 rounded-full mb-5 font-bold'}>{data.homepage.contactUsHeading}</Button>
            <h2 className="text-4xl font-bold">
              {data.homepage.contactUsTitle}
            </h2>
            <p className="">{data.homepage.contactUsText}</p>

          </div>
          <div className="mt-11 grid grid-cols-2 place-items-center">
            {data.common.contactUsLinks.map((i, key) => {
              return (
                <ContactData linkType={i.linkType} text={i.text}
                  imagePath={i.imagePath}
                  key={key}
                />
              )
            })}
          </div>
        </div>
        
          <SignupForm data={data}></SignupForm>
        
      </section>
    </>
  )
}
