/* eslint-disable @next/next/no-img-element */
import { Button } from './data-components/button'
import FooterMenu from './footer-menu'
import { PageType } from './types'
import { WrapperLarge } from './wrapper'
import ContactUsFooterLinkList from './data-components/contact-us-footer-link-list'

export default function Footer({ data }: PageType) {
  return (
    <div className="hidden md:block ">
      <WrapperLarge>
        <footer className="bg-light grid grid-cols-4 ">
          <img src="/icons/veahavta-icon.svg" alt="ואהבת לוגו" />
          <div className="grid justify-self-center self-center">
            <Button
              className={
                'text-base text-header-blue px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold'
              }
              text={data.common.footerScheduleButton}
            />
            <Button
              className={
                'text-base text-header-blue px-8 py-2 rounded-full mt-1 border-2 border-solid font-bold'
              }
              text={data.common.footerSupportUsButton}
            />
          </div>
          <FooterMenu data={data}></FooterMenu>
          <ContactUsFooterLinkList data={data} />
        </footer>
      </WrapperLarge>
    </div>
  )
}
