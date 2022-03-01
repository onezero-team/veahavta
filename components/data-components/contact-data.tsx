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
  let type: string
  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    type = linkType === 'tel' ? 'tel:' : 'mailto'
  }
  return (
    <a type={linkType} href={type} className="flex flex-row justify-self-start">
      <div className="grid grid-cols-2 grid-cols-auto-1fr grid-rows-auto-1fr gap-1">
        <div className="grid place-items-center min-w-[35px] min-h-[35px] max-h-[35px] bg-icon-bg rounded-full">
          <img src={imagePath} alt={linkType} />
        </div>
        <p className="self-center max-w-[110px]">{text}</p>
      </div>
    </a>
  )
}
