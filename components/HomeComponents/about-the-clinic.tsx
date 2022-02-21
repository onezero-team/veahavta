import React from 'react'
import { PageType } from '../Types'
import { Button } from '../button'
import Image from 'next/image'

export default function AboutTheClinic({ data }: PageType) {
  return (
    <>
      <section className="grid grid-cols-2 gap-4 ">
        <section className="w-[600px] h-[500px] mt-6 mr-20"></section>

        <div className="container ">
          <div className="w-3/6 p-6 pt-8">
            <a href="#" className="text-[28px] git config text-[#4E47F9]">
              {data.homepage.aboutHeading}
            </a>
            <h2 className="text-5xl font-bold">{data.homepage.aboutTitle}</h2>
            <p className="text-lg pt-3">{data.homepage.aboutUsText}</p>
            <Button>{data.homepage.aboutUsButton}</Button>
          </div>
        </div>
      </section>
    </>
  )
}
