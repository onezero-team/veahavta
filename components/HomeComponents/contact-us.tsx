import React from 'react'
import { PageType } from '../Types'

export default function ContactUs({ data }: PageType) {
  return (
    <>
      <h2>{data.homepage.contactUsHeading}</h2>
      <a
        type={data.common.contactUsLinks[0].linkType}
        href={`mailto:${data.common.contactUsLinks[0].text}`}
      >
        {data.common.contactUsLinks[0].text}
      </a>
    </>
  )
}
