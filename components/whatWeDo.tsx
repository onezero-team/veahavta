import React from 'react'
import Image from 'next/image'
import ServiceCard from './service_card'
import Children_icon from '../asstst/childrenIcon.svg'
import Family_icon from '../asstst/familyIcon.svg'
import Woman_icon from '../asstst/womanIcon.svg'
import Soul_icon from '../asstst/soulIcon.svg'

export default function WhatWeDo() {
  const family = {
    title: 'רפואת משפחה',
    text: 'שירותי רפואה למשפחה ורפואה מקצועית ניתנים במגוון תחומים לכלל המשפחה. המרפאה נעזרת במגוון רחב של אנשי רפואה לפי הצורך',
  }
  const children = {
    title: 'רפואת ילדים',
    text: 'במרפאת הילדים ניתנים כל שירותי הבריאות לילדים. שירותים כוללים טיפול רפואי שגרתי, חיסונים, מעקב התפתחותי, טיפול בהפרעות תקשורת ועוד.',
  }
  const womans = {
    title: 'רפואת נשים',
    text: 'מרפאת הנשים מטפלת בנשים הזקוקות למגוון שירותי הבריאות. הטיפולים כוללים: בדיקות גניקולוגיות שגרתיות, תכנון משפחה, התקנת התקנים למניעת הריון, בדיקות שד, בדיקות לגילוי סרטן, מעקב הריון ועוד.',
  }
  const soul = {
    title: 'רפואת נפש',
    text: 'המרפאה לרפואת הנפש מטפלת במבוגרים ונוער הזקוקים לשירותי ייעוץ נפשי, מספקת אבחונים פסיכיאטריים וניהול טיפול תרופתי.',
  }
  return (
    <div className="bg-stone  pt-20 w-full h-[120vh]">
      <div className={`text-rose text-center`}>מה אנחנו עושים?</div>
      <div className={`font-bold text-5xl mt-5 mb-5 text-center`}>
        שירותי המרפאה
      </div>
      <div className={`flex justify-around mt-16`}>
        <div className={`flex justify-around`}>
          <ServiceCard
            icon={<Image src={Children_icon} alt={'children_icon'} />}
            title={children.title}
            text={children.text}
          />
          <ServiceCard
            icon={<Image src={Family_icon} alt={'family_icon'} />}
            title={family.title}
            text={family.text}
          />
          <ServiceCard
            icon={<Image src={Woman_icon} alt={'woman_icon'} />}
            title={womans.title}
            text={womans.text}
          />
          <ServiceCard
            icon={<Image src={Soul_icon} alt={'soul_icon'} />}
            title={soul.title}
            text={soul.text}
          />
        </div>
      </div>
    </div>
  )
}
