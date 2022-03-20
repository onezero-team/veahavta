import React, { useState } from 'react'
import { PageType } from '../types'
import { Button } from '../data-components/button'
import SignupForm from '../form/sign-up-form'
import { WrapperLarge } from '../wrapper'
import ContactUsLinkList from '../data-components/contact-us-link-list'
import ImgCircle from '../data-components/contact-us-img'

export default function ContactUs({ data }: PageType) {
  return (
    <section id="contact-us" className="relative overflow-hidden">
      <div className="hidden xl:block h-16 bg-light"></div>
      <ImgCircle className={`left-0 -bottom-24`} />
      <section className="bg-contact-bg">
        <WrapperLarge className="relative">
          <ImgCircle className={`-right-36`} />
          <div className="grid xl:grid-cols-2 gap-6 lg:gap-8">
            <div className="grid grid-rows-auto-1fr gap-6 md:gap-10">
              <div className="">
                <Button
                  className={
                    'text-xl md:text-3xl bg-light text-header-blue px-8 py-2 rounded-full mb-5 font-bold'
                  }
                  type='button'
                  text={data.homepage.contactUsHeading}
                />
                <h2 className="text-2xl md:text-4xl font-bold">
                  {data.homepage.contactUsTitle}
                </h2>
                <p className="text-xl pt-3">{data.homepage.contactUsText}</p>
              </div>
              <ContactUsLinkList data={data} />
            </div>
            <SignupForm data={data} />
          </div>
        </WrapperLarge>
      </section>
    </section>
  )
}
