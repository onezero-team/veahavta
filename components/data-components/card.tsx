import Image from 'next/image'
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
    <div className="shadow-4xl box-border rounded-3xl min-h-[360px] bg-light max-w-[300px] overflow-hidden">
      <div className="grid place-items-center bg-azure py-4">
        <Image src={imagePath} alt={title} width={'128px'} height={'128px'}/>
        </div>
      <div className="grid place-items-center">
        <div className="p-4">
          <h2 className="text-2xl text-blue font-bold md:text-3xl">
            {title}
          </h2>
          <p className="break-normal text-clip">{text}</p>
        </div>
      </div>
    </div>
  )
}
