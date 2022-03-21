import React from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import { Button } from '../button'
import ContactDetails from './contact-details'
import ContactForm from './contact-form'
import { AiTwotonePhone } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { Circle } from '../circle.js'

export default function ContactUs({ children, pageProps, data }: any) {
  const { dir, locale } = useLocale()

  console.log('data', data.homepage)
  return (
    <div
      id="contact_us"
      className="w-[100%] h-[80%] bg-cyan-100  flex flex-row absolute"
    >
      <div className="w-[150px] h-[230px] overflow-hidden">
        <Circle className="left"></Circle>
      </div>
      <Circle className="right"></Circle>
      {/* </div> */}
      <div className="text-right pt-32 basis-1/2">
        <Button className="bg-light text-primary hover:bg-primary hover:text-light">
          {data.homepage.contactUsHeading}
        </Button>
        <div className="text-3xl py-4">{data.homepage.contactUsTitle}</div>
        <div className="pb-4">{data.homepage.contactUsText}</div>
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
