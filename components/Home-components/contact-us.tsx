import React from 'react'
import { PageType } from '../types'
import ContactData from '../data-components/contact-data'
import { Button } from '../data-components/button'
import SignupForm from '../form/sign-up-form'
import { WrapperLarge } from '../wrapper'

export default function ContactUs({ data }: PageType) {
  return (
    <section className="mt-32 xl:mt-64 bg-contact-bg">
      <WrapperLarge className="">
        <div
          id="contactUsItems"
          className="grid xl:grid-cols-2 py-4 relative lg:items-center gap-6 xl:gap-0"
        >
          <div className="grid grid-rows-auto-1fr justify-self-center gap-2">
            <div className="p-2 md:p-0 self-center lg:place-items-start">
              <Button
                className={
                  'text-xl md:text-3xl bg-light text-header-blue px-8 py-2 rounded-full mb-5 font-bold'
                }
              >
                {data.homepage.contactUsHeading}
              </Button>
              <h2 className="text-2xl md:text-4xl font-bold">
                {data.homepage.contactUsTitle}
              </h2>
              <p className="">{data.homepage.contactUsText}</p>
            </div>
            <div className="text-sm grid grid-cols-auto-1fr grid-rows-auto-1fr gap-4">
              {data.common.contactUsLinks.map((i, key) => {
                return (
                  <ContactData
                    linkType={i.linkType}
                    text={i.text}
                    imagePath={i.imagePath}
                    className="bg-bg-icon-bg"
                    key={key}
                  />
                )
              })}
            </div>
          </div>
          <SignupForm data={data} />
        </div>
      </WrapperLarge>
    </section>
  )
}
