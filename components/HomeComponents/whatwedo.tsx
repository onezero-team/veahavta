import React from 'react'
import { PageType } from '../Types'

import Card from '../card'

export default function WhatWeDo({ data }: PageType) {
  return (
    <>
      <section className="grid place-items-center">
        <div className="text-2xl text-[#D25C78] text-center">
          {data.homepage.whatWeDoHeading}
        </div>
        <h1 className="text-[82px] text-center">
          {data.homepage.whatWeDoTitle}
        </h1>
        <div className="grid grid-cols-4 place-items-center">
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
