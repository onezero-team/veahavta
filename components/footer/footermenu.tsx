import React, { useState } from 'react'
import { PageType } from '@/components/Types'

export default function FooterMenu(
  { data }: PageType,
  { locale }: { locale: string },
) {
  const menu = 'תפריט'
  return (
    <div>
      <h2 className="font-bold md:text-2xl">{menu}</h2>
      <div>{data.homepage.aboutHeading}</div>
      <div>{data.homepage.contactUsHeading}</div>
    </div>
  )
}
