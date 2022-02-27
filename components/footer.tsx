import { Button } from './data-components/button'
import FooterMenu from './footer-menu'
import { PageType } from './types'
import ContactData from '@/components/data-components/contact-data'

export default function Footer({ data }: PageType) {
  return (
    <div className="hidden md:block ">
      <footer className="bg-light px-4 py-8 p-16 grid grid-cols-4 ">
        <div className=" border h-3/5 w-3/5 self-center justify-self-center"></div>
        {/*bg-[url('')]*/}
        <div className="w-6/12 justify-self-center">
          <Button
            className={
              'w-9/12 text-base text-header-blue px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold'
            }
          >
            {data.common.footerScheduleButton}
          </Button>
          <Button
            className={
              'w-9/12 text-base  text-header-blue px-8 py-2 rounded-full mt-1 border-2 border-solid font-bold'
            }
          >
            {data.common.footerSupportUsButton}
          </Button>
        </div>
        <FooterMenu data={data}></FooterMenu>
        <div className="">
          <h2 className="font-bold text-2xl">
            {data.homepage.contactUsHeading}
          </h2>
          {data.common.contactUsLinks.map((contactUsLinks: any, key: any) => {
            return (
              <ContactData
                linkType={contactUsLinks.linkType}
                text={contactUsLinks.text}
                imagePath={contactUsLinks.imagePath}
                key={key}
              />
            )
          })}
        </div>
      </footer>
    </div>
  )
}
