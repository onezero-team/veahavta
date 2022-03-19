/* eslint-disable @next/next/no-img-element */
import { useLocale } from '@/lib/hooks'
import React from 'react'

export default function ImgCircle({ className }: { className: string }) {
  const { dir } = useLocale()
  let side
  dir === 'rtl' ? (side = 'right') : (side = 'left')
  return (
    <div className={`absolute ${className} md:block hidden`}>
      <img src="/icons/circle-svg.svg" alt="" />
    </div>
  )
}
