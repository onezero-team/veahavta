
import FooterMenu from './data-components/footer-menu'
import { PageType } from './types'
import { WrapperLarge } from './wrapper'
import ContactUsFooterLinkList from './data-components/contact-us-footer-link-list'
import FooterButtons from './data-components/footer-buttos'
import Image from 'next/image'

export default function Footer({ data }: PageType) {
  return (
    <WrapperLarge>
      <footer className="bg-light gap-2.5 grid md:grid-cols-2 lg:grid-cols-4 ">
        <Image
          src="/icons/veahavta-icon.svg"
          height={'62px'}
          width={'142px'}
          alt="ואהבת לוגו"
        />
        <FooterButtons data={data} />
        <FooterMenu data={data}></FooterMenu>
        <ContactUsFooterLinkList data={data} />
      </footer>
    </WrapperLarge>
  )
}
