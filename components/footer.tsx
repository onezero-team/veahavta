/* eslint-disable @next/next/no-img-element */
import { Button } from './data-components/button'
import FooterMenu from './footer-menu'
import { PageType } from './types'
import ContactData from '@/components/data-components/contact-data'
import { WrapperLarge } from './wrapper'

export default function Footer({ data }: PageType) {
  return (
    <div className="hidden md:block ">
      <WrapperLarge>
      <footer className="bg-light grid grid-cols-4 ">
        <img src="/icons/veahavta-icon.svg" alt="ואהבת לוגו" />
        <div className="grid justify-self-center self-center">
          <Button
            className={
              'min-w-[130px] text-base text-header-blue px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold'
            }
          >
            {data.common.footerScheduleButton}
          </Button>
          <Button
            className={
              'min-w-[130px] text-base text-header-blue px-8 py-2 rounded-full mt-1 border-2 border-solid font-bold'
            }
          >
            {data.common.footerSupportUsButton}
          </Button>
        </div>
        <FooterMenu data={data}></FooterMenu>
        <div className="self-center">
          <h2 className="font-bold text-2xl">
            {data.homepage.contactUsHeading}
          </h2>
          <ul className="text-sm">
            {data.common.contactUsLinks.map((contactUsLinks: any, key: any) => {
              return (
                <ContactData
                  linkType={contactUsLinks.linkType}
                  text={contactUsLinks.text}
                  imagePath={'/footer' + contactUsLinks.imagePath}
                  className="bg-icon"
                  key={key}
                />
              )
            })}
          </ul>
        </div>
      </footer>
      </WrapperLarge>
    </div>
  )
}
