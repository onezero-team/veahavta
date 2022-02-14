import React from 'react'

export default function ContactDetails({
  icon,
  text,
  details,
  className,
}: any) {
  return (
    <div id="container " className="flex flex-row">
      <div className="h-16 w-16 rounded-full bg-primary ml-3 p-3">{icon}</div>
      <div className="pt-3">
        <div className="">{text}</div>
        <div className="">{details}</div>
      </div>
    </div>
  )
}
