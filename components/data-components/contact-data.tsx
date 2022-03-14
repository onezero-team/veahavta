/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ContactData({
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
  console.log(imagePath)
  let type: string
  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    type = linkType === 'tel' ? 'tel:' : 'mailto'
  }
  console.log(imagePath)
  return (
    <li>
      <a type={linkType} href={type} className="grid grid-rows-1 w-[193px]">
        <div className="grid grid-cols-2 grid-cols-auto-1fr gap-4">
          <img src={imagePath} alt={linkType} />
          <p className="text-base">{text}</p>
        </div>
      </a>
    </li>
  )
}
