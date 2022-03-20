import { PageType } from '../types'
import ContactUsFooterLink from './contact-us-footer-link'

export default function ContactUsFooterLinkList({ data }: PageType) {
  {
    return (
      <div className="self-center">
        <h2 className="font-bold text-2xl">{data.homepage.contactUsHeading}</h2>
        <ul className="text-sm grid gap-2.5 pt-2.5">
          {data.common.contactUsLinks.map((contactUsLinks: any, key: any) => {
            return (
              <ContactUsFooterLink
                linkType={contactUsLinks.linkType}
                text={contactUsLinks.text}
                imagePath={'/footer' + contactUsLinks.imagePath}
                linkValue={contactUsLinks.linkValue}
                className="grid grid-rows-1 grid-flow-col grid-cols-auto-1fr gap-4"
                key={key}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
