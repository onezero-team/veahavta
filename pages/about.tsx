import React from 'react'
import { Button } from '../components/button'
import Image from 'next/image'
import Hands from '../asstst/hands.svg'

export default function About() {
  return (
    <div
      id="about"
      className={`bg-stone p-5 flex flex-row items-center w-[100%] h-screen`}
    >
      <div>
        <div id="imageHands" className={`basis-1/2`}>
          <Image src={Hands} alt={'hands'} />
        </div>
      </div>
      <div id="textWarp" className={`px-12 mx-5 text-right basis-1/2`}>
        <div id="title" className={`text-rose`}>
          אודות המרפאה
        </div>
        <div id="header" className={`font-bold text-4xl mt-5`}>
          המטרה: שירותי בריאות <br />
          מצויינים לכל איש
          <br /> ואישה בישראל.
        </div>
        <div id="description" className={`mt-5`}>
          המרפאה פועלת כולה בהתנדבות ומספקת שירותים לאנשים שנמנעו מהם תושבות
          רשמית בישראל כתוצאה מעקירה מארץ המקור. צוות המרפאה עושה מאמצים
          משמעותיים לספק בהתנדבות מלאה את כל סוגי הטיפול והעזרה הנדרשים.
        </div>
        <Button
          className="bg-rose 
                 mt-7 
                 hover:bg-light 
                 hover:border-2 border-Rose-400 
                 hover:text-rose"
        >
          קרא עוד
        </Button>
      </div>
    </div>
  )
}
