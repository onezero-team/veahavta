/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ContactUsLink({
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
  console.log(text)

  if (linkType === 'address') {
    type = `https://www.google.co.il/maps/search/` + `${text}`
  } else {
    const regexp = new RegExp(
      '\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+',
      'g',
    )
    let num = regexp.exec(text)
    if (num !== null) type = `"tel:${num[0]}"`
    else type = 'mailto: veahavta.clinic@gmail.com'
  }

  return (
    <li className="">
      <a
        type={linkType}
        href={type}
        target="_blank"
        className={className}
        rel="noreferrer"
      >
        <div className={className}>
          <img src={imagePath} alt={linkType} />
          <p className="text-base self-center">{text}</p>
        </div>
      </a>
    </li>
  )
}
