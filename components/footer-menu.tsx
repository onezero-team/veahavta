import React, { useState } from 'react'
import { PageType } from '@/components/types'
import { Button } from './data-components/button'

export default function FooterMenu({ data }: PageType) {
  return (
    <div className="justify-self-center self-center">
      <h2 className="font-bold md:text-2xl">{data.common.footerMenuTitle}</h2>
      <div className="grid place-items-start">
        <Button text={data.homepage.aboutHeading}/>
        <Button text={data.common.footerContactUsTitle}/>
        <Button text={data.common.footerSupportUsButton}/>
      </div>
    </div>
  )
}
