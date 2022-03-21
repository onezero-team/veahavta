import React from 'react'

export default function ServiceCard({ icon, title, text }: any) {
  return (
    <div className="w-[20%] h-96 rounded-lg  overflow-hidden">
      <div id="divIcon" className="bg-cyan-100 h-[50%] py-10 px-24">
        {icon}
      </div>
      <div className="p-5 h-[50%] bg-light text-right">
        <div className=" text-primary text-bold text-md">{title}</div>
        <div className="pb-8 text-sm">{text}</div>
      </div>
    </div>
  )
}
