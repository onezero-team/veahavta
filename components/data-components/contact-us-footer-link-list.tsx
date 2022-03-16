import { PageType } from '../types'
import ContactUsFooterLink from './contact-us-footer-link'

export default function ContactUsFooterLinkList({ data }: PageType) {
    {
        return (
            <div className="self-center">
                <h2 className="font-bold text-2xl">
                    {data.homepage.contactUsHeading}
                </h2>
                <ul className="text-sm">
                    {data.common.contactUsLinks.map((contactUsLinks: any, key: any) => {
                        return (
                            <ContactUsFooterLink
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
        )
    }
}
