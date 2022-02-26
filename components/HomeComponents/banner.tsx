import React from 'react'
import { PageType } from '../Types'
import { PageHeader } from '../text'
import { Button } from '../button'
import themePreval from '@/lib/theme.preval'

export default function Banner({ data }: PageType) {
  return (
    <>
      <div className="wrapper min-h-screen-50">
        <div className="grid place-items-center">
          <div className="background"></div>
          <PageHeader>{data.homepage.title}</PageHeader>
          <p className="text-xl text-center w-7/12 md:4/12 md:text-2xl">{data.homepage.description}</p>
          {/* <p className="text-2xl">{data.homepage.description.slice(40)}</p> */}
          <Button
            className={
              'text-xl font-bold bg-[#4E47F9] text-light px-8 py-2 rounded-full m-12 font-bold lg:text-2xl'
            }
          >
            {data.homepage.getToKnowUsButton}
          </Button>
        </div>
      </div>
      <style jsx>{`
        div.wrapper {
          margin-top: -${themePreval.height.header};
          padding-top: ${themePreval.height.header};
          position: relative;
        }
        div.background {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            109.17deg,
            rgba(1, 157, 177, 0.21) 38.49%,
            #019db1 98.95%
          );
        }
      `}</style>
    </>
  )
}
