import React from 'react'
import Image from 'next/image'
import ServiceCard from '../service-card'
import Children_icon from '../../assets/icons/children-icon.svg'
import Family_icon from '../../assets/icons/family-icon.svg'
import Woman_icon from '../../assets/icons/woman-icon.svg'
import Soul_icon from '../../assets/icons/soul-icon.svg'
import { PageType } from 'pages'

export default function WhatWeDo({ data }: PageType) {
  // const family = {
  //   title: data.homepage.card.,
  //   text: 'שירותי רפואה למשפחה ורפואה מקצועית ניתנים במגוון תחומים לכלל המשפחה. המרפאה נעזרת במגוון רחב של אנשי רפואה לפי הצורך',
  // }
  // const children = {
  //   title: 'רפואת ילדים',
  //   text: 'במרפאת הילדים ניתנים כל שירותי הבריאות לילדים. שירותים כוללים טיפול רפואי שגרתי, חיסונים, מעקב התפתחותי, טיפול בהפרעות תקשורת ועוד.',
  // }
  // const womans = {
  //   title: 'רפואת נשים',
  //   text: 'מרפאת הנשים מטפלת בנשים הזקוקות למגוון שירותי הבריאות. הטיפולים כוללים: בדיקות גניקולוגיות שגרתיות, תכנון משפחה, התקנת התקנים למניעת הריון, בדיקות שד, בדיקות לגילוי סרטן, מעקב הריון ועוד.',
  // }
  // const soul = {
  //   title: 'רפואת נפש',
  //   text: 'המרפאה לרפואת הנפש מטפלת במבוגרים ונוער הזקוקים לשירותי ייעוץ נפשי, מספקת אבחונים פסיכיאטריים וניהול טיפול תרופתי.',
  // }
  return (
    <div className="bg-stone  pt-20 w-full h-[120vh]">
      <div className={`text-rose text-center`}>
        {data.homepage.whatWeDoHeading}
      </div>
      <div className={`font-bold text-5xl mt-5 mb-5 text-center`}>
        {data.homepage.whatWeDoTitle}
      </div>
      <div className={`flex justify-around mt-16`}>
        <div className={`flex justify-around`}>
          {data.homepage.whatWeDoCards.map((card) => (
            <ServiceCard
            key={card.title}
              icon={
                <Image
                  src={card.imagePath}
                  alt={card.title}
                  height="100%"
                  width="100%"
                />
              }
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
