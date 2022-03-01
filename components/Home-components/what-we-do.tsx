import React from 'react'
import { PageType } from '../types'
import Card from '../data-components/card'
import { WrapperLarge } from '../wrapper'

export default function WhatWeDo({ data }: PageType) {
  return (
    <WrapperLarge>
      <section className="grid place-items-center">
        <div className="text-lg md:text-2xl text-[#D25C78] text-center">
          {data.homepage.whatWeDoHeading}
        </div>
        <h2 className="text-2xl md:text-7xl text-center">
          {data.homepage.whatWeDoTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:max-w-[66.6%] xl:grid-cols-4 gap-4">
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
    </WrapperLarge>
  )
}
