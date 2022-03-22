/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { printIntrospectionSchema } from 'graphql'

export default function Img({
  imagePath,
  className,
  width,
  height,
}: {
  imagePath: string
  className: string
  width: string
  height: string
}) {
  return (
    <div className={`absolute ${className}`}>
      <Image src={imagePath} alt="" width={width} height={height} />
      {/* <img src={imagePath} alt="" /> */}
    </div>
  )
}
