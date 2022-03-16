/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ContactUsFooterLink({
  linkType,
  text,
  imagePath,
  className,
}: {
  linkType: string
  text: string
  imagePath: string
  className?: string
}) {
  //   console.log(imagePath, text,linkType)
  let type: string
  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    type = linkType === 'tel' ? 'tel:' : 'mailto'
  }
  //   console.log(type)
  return (
    <li className="">
      <a type={linkType} href={type} className="">
        <div className="">
          <img src={imagePath} alt={linkType} />
          <p className="text-base self-center">{text}</p>
        </div>
      </a>
    </li>
  )
}
