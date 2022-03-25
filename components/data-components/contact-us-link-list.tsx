import React from 'react'
import { PageType } from '../types'
import ContactUsLink from './contact-us-link'

export default function ContactUsLinkList({ data }: PageType) {
  return (
    <ul className="grid lg:grid-cols-auto-1fr gap-2.5 gap-x-5 grid-rows-auto-1fr">
      {data.common.contactUsLinks.map((contactUsLinks, key) => {
        return (
          <ContactUsLink
            linkType={contactUsLinks.linkType}
            text={contactUsLinks.text}
            imagePath={contactUsLinks.imagePath}
            linkValue={contactUsLinks.linkValue}
            className="grid grid-rows-1fr grid-flow-col grid-cols-auto-1fr gap-2.5"
            key={key}
          />
        )
      })}
    </ul>
  )
}
