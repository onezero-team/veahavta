/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PageType } from '../types'
import { Button } from '../data-components/button'
import { WrapperLarge } from '../wrapper'

export default function AboutTheClinic({ data }: PageType) {
  return (
    <section>
      <WrapperLarge className="">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-6 justify-items-center">
          {/* <div className="grid xl:grid-cols-2 lg:gap-4 py-18 xl:py-10 justify-items-center"> */}
          <div className="">
            <img
              src="/icons/about-clinic.png"
              alt="אודות המרפאה"
              className="justify-self-center"
            />
          </div>
          <div className="grid ">
            <div className="grid xl:place-items-start justify-self-center">
              <div className="">
                <a href="#" className="text-2xl text-header-blue xl:text-3xl">
                  {data.homepage.aboutHeading}
                </a>
                <h2
                  className="font-bold
                            text-5xl"
                >
                  {data.homepage.aboutTitle}
                </h2>
                <p className="text-lg pt-3">{data.homepage.aboutUsText}</p>
                <div
                  className="justify-self-center 
                            xl:justify-self-start"
                >
                  <Button
                    className={
                      'text-lg font-bold bg-header-blue text-light px-8 py-2 rounded-full m-12 font-bold m:text-xl lg:text-2xl'
                    }
                  >
                    {data.homepage.aboutUsButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperLarge>
    </section>
  )
}
