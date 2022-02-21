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
  console.log(123)
  return (
    <div className="w-6/12 mt-14 h-28">
      <div className="w-1/1 h-32">{imagePath}</div>
      <div className="text-[28px] text-[#4E47F9]  font-bold">{title}</div>
      <div>{text}</div>
    </div>
  )
}
