/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Img({imagePath,className}:{imagePath:string,className:string}){
    return(
        <div className={`absolute ${className}`}>
            <img src={imagePath} alt=""/>
        </div>
    )
}