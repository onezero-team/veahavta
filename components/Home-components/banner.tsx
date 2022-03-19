import React from 'react'
import { PageType } from '../types'
import { PageHeader } from '../data-components/header-text'
import { Button } from '../data-components/button'
import themePreval from '@/lib/theme.preval'
import { WrapperLarge } from '../wrapper'
import HeaderImages from '../data-components/header-images'
import Header from '../header'

export default function Banner({ data }: PageType) {
  return (
    <div id="top-header" className="">
      <div className="wrapper overflow-hidden">
        <WrapperLarge>
      <HeaderImages />
          <div className="grid place-items-center py-24">
            <div className="background"></div>
            <PageHeader>{data.homepage.title}</PageHeader>
            <p className="text-xl text-center max-w-[400px] md:4/12 md:text-2xl">
              {data.homepage.description}
            </p>
            <Button
              className={
                'text-xl font-bold bg-header-blue text-light px-8 py-2 rounded-full m-12 font-bold lg:text-2xl'
              }
              text={data.homepage.getToKnowUsButton}
            />
          </div>
        </WrapperLarge>


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
      </div>
    </div >
  )
}
