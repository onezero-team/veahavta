/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ContactUsLink({
  linkType,
  text,
  imagePath,
  className,
  linkValue,
}: {
  linkType: string
  text: string
  imagePath: string
  className?: string
  linkValue?: string
}) {
  let type: string
  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    type =
      linkType === 'tel' ? `tel:${linkValue}` : 'mailto: insertmail@gmail.com'
  }
  return (
    <li className="">
      <Link href={type}>
        <a type={linkType} target="_blank" className="" rel="noreferrer">
          <div className={`${className} justify-self-center`}>
            <img src={imagePath} alt={linkType} />
            <p className="text-base self-center">{text}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
