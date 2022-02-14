import React from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import { Button } from './button'
import ContactDetails from './contactDetails'
import ContactForm from './contactForm'
import { AiTwotonePhone } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { Circle } from './circle.js'

export default function Contact() {
// {
//    children,
//    pageProps }
//    : any
  const { dir, locale } = useLocale()
  return (
    <div
      id="contact_us"
      className="w-[100%] h-[80%] bg-cyan-100  flex flex-row absolute"
    >
      <Circle className="left"></Circle>
      <Circle className="right"></Circle>
      <div className="text-right pt-32 basis-1/2 pr-52">
        <Button className="bg-light text-primary hover:bg-primary hover:text-light">
          צרו קשר
        </Button>
        <div className="text-3xl py-4">אנחנו פה בשבילכם </div>
        <div className="pb-4">
          המרפאה פועלת בימים ג&apos; וה&apos; בין השעות 16:00 עד <br />
          19:00 וביום שבת בין השעות 10:00 עד 14:00
        </div>
        <div className=" grid grid-cols-2 gap-4 place-content-center">
          <ContactDetails
            text="עברית, אנגלית, ערבית"
            details="053-4848846"
            icon={
              <AiTwotonePhone className="fill-light text-4xl hover:fill-Cyan-100" />
            }
          />
          <ContactDetails
            text="טיגריניה, אמהרית"
            details="053-4848846"
            icon={
              <AiTwotonePhone className="fill-light text-4xl hover:fill-Cyan-100" />
            }
          />
          <ContactDetails
            text="מגדל הנביאים חורי 2"
            details=""
            icon={
              <MdLocationOn className="fill-light text-4xl hover:fill-Cyan-100" />
            }
          />
          <ContactDetails
            text=""
            details="veahavta.clinic@gmail.com"
            icon={
              <HiMail className="fill-light text-4xl hover:fill-Cyan-100" />
            }
          />
        </div>
      </div>
      <div className="mr-5">
        <ContactForm />
      </div>
    </div>
  )
}
