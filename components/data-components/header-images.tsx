import React from 'react'
import Img from './image-component'

export default function HeaderImages() {
  return (
    <div id="header-images" className="hidden 2xl:block max-h-full max-w-full">
      <Img
        imagePath="/icons/Rectangle-1.png"
        width="323px"
        height="384px"
        className="left-44 -top-0"
      />
      <Img
        imagePath="/icons/Rectangle-2.png"
        width="323px"
        height="194px"
        className="left-[35%] -top-0"
      />
      <Img
        imagePath="/icons/Rectangle-3.png"
        width="323px"
        height="388px"
        className="right-52 top-20"
      />
      <Img
        imagePath="/icons/Rectangle-4.png"
        width="297px"
        height="388px"
        className="right-0 top-[220px]"
      />
      <Img
        imagePath="/icons/Rectangle-5.png"
        width="323px"
        height="388px"
        className="right-[20%] top-[520px]"
      />
      <Img
        imagePath="/icons/Rectangle-6.png"
        width="323px"
        height="388px"
        className="right-2/3 top-[520px]"
      />
      <Img
        imagePath="/icons/Rectangle-7.png"
        width="276px"
        height="388px"
        className="left-0 top-52"
      />
    </div>
  )
}
