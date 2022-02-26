import React from 'react'

export default function Card({
  title,
  text,
  imagePath,
}: {
  title: string
  text: string
  imagePath: string
}) {
  return (
    <div
      className="w-11/12 mt-14 border border-[#FFFFFF]
    shadow-[0px_0px_4px_rgba(0,0,0,0.25)] box-border boreder-solid rounded-3xl h-96"
    >
      <div className="w-1/1 h-1/2 ">{imagePath}</div>
      <div className="grid place-items-center">
        <div className="w-11/12 ">
          <h2 className="text-2xl text-[#4E47F9] font-bold md:text-3xl">
            {title}
          </h2>
          <p className="break-normal text-clip overflow-hidden ...">{text}</p>
        </div>
      </div>
    </div>
  )
}
