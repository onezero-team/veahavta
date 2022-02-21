import React from 'react'
import { PageType } from '../Types'

export default function WhatWeDo({ data }: PageType) {
  return (
    <>
      <section className="container">
        <div className="text-2xl text-[#D25C78] text-center">
          {data.homepage.whatWeDoHeading}
        </div>
        <h1 className="text-[82px] text-center">
          {data.homepage.whatWeDoTitle}
        </h1>
        <div className="grid grid-cols-4">
          {data.homepage.whatWeDoCards.map((card, i) => {
            return (
              <div className="w-8/12" key={i}>
                <div className="w-1/1 h-2/6">{card.imagePath}</div>
                <div className="text-[28px] text-[#4E47F9] text-center">
                  {card.title}
                </div>
                <div>{card.text}</div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
