import React from 'react'
import { PageType } from '../types'
import ContactData from '../data-components/contact-data'
import { Button } from '../data-components/button'
import SignupForm from '../form/sign-up-form'
import { WrapperLarge } from '../wrapper'

export default function ContactUs({ data }: PageType) {
  return (
    <section id="contact-us">
      <div className='hidden lg:block h-16 bg-light'></div>
      <section className="bg-contact-bg">
      <WrapperLarge className="">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-6 justify-items-center">
          <div className="grid grid-rows-auto-1fr gap-2 max-w-[630px]">
            <div className="p-2 md:p-0 lg:place-items-start">
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
              <p className="text-xl">{data.homepage.contactUsText}</p>
            </div>
          
              <ul className="text-sm grid grid-cols-auto-1fr grid-rows-auto-1fr gap-4">
                {data.common.contactUsLinks.map((contactUsLinks, key) => {
                  return (
                    <ContactData
                      linkType={contactUsLinks.linkType}
                      text={contactUsLinks.text}
                      imagePath={contactUsLinks.imagePath}
                      className="bg-icon-bg"
                      key={key}
                    />
                  )
                })}
              </ul>
            
          </div>
          <SignupForm data={data} />
        </div>
      </WrapperLarge>
      </section>
    </section>
  )
}
