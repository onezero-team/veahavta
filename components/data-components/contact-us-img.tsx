import { useLocale } from '@/lib/hooks'
import Image from 'next/image'
import React from 'react'

export default function ImgCircle({ className }: { className: string }) {
  const { dir } = useLocale()
  let side
  dir === 'rtl' ? (side = 'right') : (side = 'left')
  return (
    <div className={`absolute ${className} md:block hidden`}>
      <Image
        src={'/icons/circle.png'}
        alt={'circle'}
        width={'318px'}
        height={'318px'}
      />
    </div>
  )
}
