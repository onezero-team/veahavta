/* eslint-disable @next/next/no-img-element */
import FooterMenu from './data-components/footer-menu'
import { PageType } from './types'
import { WrapperLarge } from './wrapper'
import ContactUsFooterLinkList from './data-components/contact-us-footer-link-list'
import FooterButtons from './data-components/footer-buttos'

export default function Footer({ data }: PageType) {
  return (
    <div className="hidden md:block ">
      <WrapperLarge>
        <footer className="bg-light grid grid-cols-4 ">
          <img src="/icons/veahavta-icon.svg" alt="ואהבת לוגו" />
          <FooterButtons data={data} />
          <FooterMenu data={data}></FooterMenu>
          <ContactUsFooterLinkList data={data} />
        </footer>
      </WrapperLarge>
    </div>
  )
}
