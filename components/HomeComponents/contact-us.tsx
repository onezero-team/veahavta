import React from 'react'
import { PageType } from '../Types'
import ContactData from '../contactdata'

export default function ContactUs({ data }: PageType) {
  return (
    <>
      <section className="grid grid-cols-2 place-items-center mt-64">
        <div className="grid place-items-center">
          <h2>{data.homepage.contactUsHeading}</h2>
          <h2 className="text-4xl font-bold">
            {data.homepage.contactUsTitle}בשבילכם
          </h2>
          <p className="w-4/12">{data.homepage.contactUsText}</p>
          <div className=" grid grid-cols-2 place-items-center">
            {data.common.contactUsLinks.map((i, key) => {
              return (
                <ContactData
                  linkType={i.linkType}
                  text={i.text}
                  imagePath={i.imagePath}
                  key={key}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
