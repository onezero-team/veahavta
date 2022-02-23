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
        <div className="w-11/12 mt-14 h-28 rounded-3xl border-solid border-2 border-black h-96">
            <div className="w-1/1 h-1/2 ">{imagePath}</div>
            <div className="grid place-items-center">
            <div className="w-11/12 ">
                <h2 className="text-[28px] text-[#4E47F9] font-bold">{title}</h2>
                <p className="break-normal ">{text}</p>
            </div>
            </div>
        </div>
    )
}
