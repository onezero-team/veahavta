/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PageType } from '../types'
import { Button } from '../data-components/button'
import { WrapperLarge } from '../wrapper'
import Link from 'next/link'

export default function AboutTheClinic({ data }: PageType) {
  return (
    <section>
      <WrapperLarge className="">
        <div className="grid xl:grid-cols-2 gap-10 xl:gap-5 justify-items-center">
          <div className="">
            <img
              src="/icons/about-clinic.png"
              alt="אודות המרפאה"
              className="justify-self-center"
            />
          </div>
          <div className="grid place-items-center">
            <div className="grid xl:place-items-start">
              <div className="grid">
                <Link href="#">
                <a className="text-2xl text-header-blue xl:text-3xl">
                  {data.homepage.aboutHeading}
                </a>
                </Link>
                <h2
                  className="font-bold
                            text-5xl pt-2.5"
                >
                  {data.homepage.aboutTitle}
                </h2>
                <p className="text-lg pt-5 lg:pt-10">
                  {data.homepage.aboutUsText}
                </p>
                <div
                  className="justify-self-center 
                            xl:justify-self-start"
                >
                  <Button
                    className={
                      'text-lg font-bold bg-header-blue text-light px-8 py-2 rounded-full m-12 font-bold m:text-xl lg:text-2xl'
                    }
                    text={data.homepage.aboutUsButton}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperLarge>
    </section>
  )
}
