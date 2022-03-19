import React, { useState } from 'react'
import { PageType } from '../types'
import { Button } from '../data-components/button'
import SignupForm from '../form/sign-up-form'
import { WrapperLarge } from '../wrapper'
import ContactUsLinkList from '../data-components/contact-us-link-list'
import ImgCircle from '../data-components/contact-us-img'
import { useLocale } from '@/lib/hooks'

export default function ContactUs({ data }: PageType) {
  const { dir } = useLocale()

  let side = 'right'
  let otherSide = 'left'
  if (dir === 'ltr') {
    side = 'left'
    otherSide = 'right'
  }

  return (
    <section id="contact-us" className="relative overflow-hidden">
      <div className="hidden lg:block h-16 bg-light"></div>
      <ImgCircle className={`${otherSide}-0 -bottom-24`} />
      <section className="bg-contact-bg">
        <WrapperLarge className="relative">
          <ImgCircle className={`-${side}-36`} />
          <div className="grid xl:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
            <div className="grid grid-rows-auto-1fr gap-2 ">
              <div className="p-2 md:p-0 lg:place-items-start">
                <Button
                  className={
                    'text-xl md:text-3xl bg-light text-header-blue px-8 py-2 rounded-full mb-5 font-bold'
                  }
                  text={data.homepage.contactUsHeading}
                />
                <h2 className="text-2xl md:text-4xl font-bold">
                  {data.homepage.contactUsTitle}
                </h2>
                <p className="text-xl">{data.homepage.contactUsText}</p>
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
