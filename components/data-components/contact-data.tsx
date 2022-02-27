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
  let type: string
  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    type = linkType === 'tel' ? 'tel:' : 'mailto'
  }
  return (
    <a
      type={linkType}
      href={type}
      className="flex flex-row justify-self-start p-2"
    >
      <div className="w-5 h-5 border ml-2"></div>
      {/*bg-[url('')]*/}
      {text}
    </a>
  )
}
