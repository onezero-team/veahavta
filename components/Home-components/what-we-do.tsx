import React from 'react'
import { PageType } from '../types'

import Card from '../data-components/card'

export default function WhatWeDo({ data }: PageType) {
  return (
    <>
      <section className="mt-12 md:mt-24 grid place-items-center">
        <div className="text-lg md:text-2xl text-[#D25C78] text-center">
          {data.homepage.whatWeDoHeading}
        </div>
        <h1 className="text-2xl md:text-7xl text-center">
          {data.homepage.whatWeDoTitle}
        </h1>

        <div className="grid grid-cols-2 place-items-center md:w-8/12 md:h-6/6 md:grid-cols-4 ">
          {data.homepage.whatWeDoCards.map((card, i) => {
            return (
              <Card
                title={card.title}
                text={card.text}
                imagePath={card.imagePath}
                key={i}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
