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
    <div className="grid grid-cols-2 p-4 ">
      <div className="w-5 h-5 bg-emerald-800 "></div>
      <a type={linkType} href={`${Type}`}>
        {text}
      </a>
    </div>
  )
}
