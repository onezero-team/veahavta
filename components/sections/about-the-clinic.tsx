import React from 'react'
import Image from 'next/image'
import Hands from '../../assets/images/hands.svg'
import { Button } from '../button'
import { PageType } from 'pages'

export default function AboutTheClinic({ data }: PageType) {
  return (
    <div
      id="about"
      className={`bg-stone p-5 flex flex-row items-center w-[100%] h-screen`}
    >
      <div>
        <div id="imageHands" className={`basis-1/2`}>
          <Image src={Hands} alt={'hands'} />
        </div>
      </div>
      <div id="textWarp" className={`px-12 mx-5 text-right basis-1/2`}>
        <div id="title" className={`text-rose`}>
          {data.homepage.aboutHeading}
        </div>
        <div id="header" className={`font-bold text-4xl mt-5`}>
          {data.homepage.aboutTitle}
        </div>
        <div id="description" className={`mt-5`}>
          <p>{data.homepage.aboutUsText}</p>
        </div>
        <Button
          className="bg-rose 
                 mt-7 
                 hover:bg-light 
                 hover:border-2 border-Rose-400 
                 hover:text-rose"
        >
          {data.homepage.aboutUsButton}
        </Button>
      </div>
    </div>
  )
}
