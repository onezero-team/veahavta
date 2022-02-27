import React from 'react'
import { PageType } from '../Types'
import { Button } from '../dataComponents/button'

export default function AboutTheClinic({ data }: PageType) {
  
  return (
    <>
      <section className="grid md:grid-cols-2 md:gap-4 ">
        <div className="hidden md:block w-[600px] h-[500px] mt-6 mr-20 border bg-[url('')]"></div>

        <div className="grid place-items-center md:place-items-start">
          <div className="w-7/12 md:p-6 md:pt-8 grid">
            <a
              href="#"
              className=" text-2xl md:text-3xl git config text-[#4E47F9]"
            >
              {data.homepage.aboutHeading}
            </a>
            <h2 className="text-2xl md:text-5xl font-bold">
              {data.homepage.aboutTitle}
            </h2>
            <p className="text-lg pt-3">{data.homepage.aboutUsText}</p>
            <div className="justify-self-center md:justify-self-start">
              <Button
                className={
                  'text-xl font-bold bg-[#4E47F9] text-light px-8 py-2 rounded-full m-12 font-bold md:text-2xl'
                }
              >
                {data.homepage.aboutUsButton}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
