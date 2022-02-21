import React from 'react'
import { PageType } from '../Types'

export default function ContactUs({ data }: PageType) {
  return (
    <>
      <section className="grid grid-cols-2">
        <div>
          <h2>{data.homepage.contactUsHeading}</h2>
          <h2>{data.homepage.contactUsTitle}בשבילכם</h2>
          <div className="w-5/12 grid grid-cols-2">
            {data.common.contactUsLinks.map((i, key) => {
              let Type: string;
              if (i.linkType === 'address') {
                Type = `https://www.google.co.il/maps/search/` + `${i.text}`;
              }
              else {
                Type = (i.linkType === "tel" ? 'tel:' : 'mailto')
              }
              return (
                <div className="w-8/12" key={key}>
                  <a type={i.linkType}
                    href={`${Type}`} key={key}>
                    {i.text}
                  </a>

                </div>
              )
            }
            )
            }
          </div>
        </div>
      </section>
    </>
  )
}
