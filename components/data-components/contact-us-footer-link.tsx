/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ContactUsFooterLink({
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
        <a type={linkType} className={className}>
          <div className="grid grid-rows-1 grid-cols-auto-1fr gap-4">
            <div className="w-6 h-6 grid place-items-center">
              <img src={imagePath} alt={linkType} />
            </div>
            <p className="text-base self-center">{text}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
