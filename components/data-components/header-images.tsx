import React from "react";
import Img from "./image-component";

export default function HeaderImages(){
    return(
        <div id="header-images" className="hidden 2xl:block max-h-full max-w-full">
            <Img imagePath="/icons/Rectangle-1.png" className="left-44 -top-0"/>
            <Img imagePath="/icons/Rectangle-2.png" className="left-[35%] -top-0"/>
            <Img imagePath="/icons/Rectangle-3.png" className="right-52 top-20"/>
            <Img imagePath="/icons/Rectangle-4.png" className="right-0 top-[200px]"/>
            <Img imagePath="/icons/Rectangle-5.png" className="right-[20%] top-[500px]"/>
            <Img imagePath="/icons/Rectangle-6.png" className="right-2/3 top-[500px]"/>
            <Img imagePath="/icons/Rectangle-7.png" className="left-0 top-52"/>
        </div>
    )
}