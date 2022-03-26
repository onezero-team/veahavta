import { PageType } from '@/components/types'
import Link from 'next/link'

export default function FooterMenu({ data }: PageType) {
  return (
    <div className="md:justify-self-center">
      <h2 className="font-bold md:text-2xl">{data.common.footerMenuTitle}</h2>
      <div className="grid place-items-start gap-2.5 pt-2.5">
        <Link href="#about-us">
          <a>{data.homepage.aboutHeading}</a>
        </Link>
        <Link href="#contact-us">
          <a>{data.common.footerContactUsTitle}</a>
        </Link>
        <Link href="#about-the-clinic">
          <a>{data.common.footerSupportUsButton} </a>
        </Link>
      </div>
    </div>
  )
}
