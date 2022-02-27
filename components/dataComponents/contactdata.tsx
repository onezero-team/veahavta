/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function ContactData({
  linkType,
  text,
  imagePath,
}: {
  linkType: string
  text: string
  imagePath: string
}) {
  let Type: string
  if (linkType === 'address') {
    Type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    Type = linkType === 'tel' ? 'tel:' : 'mailto'
  }
  return (
    <a
      type={linkType}
      href={`${Type}`}
      className="flex flex-row justify-self-start p-2"
    >
      <div className="w-5 h-5 border bg-[url('')] ml-2"></div>
      {text}
    </a>
  )
}
