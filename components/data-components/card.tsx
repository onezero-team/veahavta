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
    <div className="w-11/12 mt-14 shadow-4xl box-border rounded-3xl h-96">
      <div className="h-1/2 ">{imagePath}</div>
      <div className="grid place-items-center">
        <div className="w-11/12 ">
          <h2 className="text-2xl text-header-blue font-bold md:text-3xl">
            {title}
          </h2>
          <p className="break-normal text-clip overflow-hidden ...">{text}</p>
        </div>
      </div>
    </div>
  )
}
