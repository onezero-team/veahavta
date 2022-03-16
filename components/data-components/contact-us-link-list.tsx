import React from "react";
import { PageType } from "../types";
import ContactUsFooterLink from "./contact-us-footer-link";
import ContactUsLink from "./contact-us-link";

export default function ContactUsLinkList({ data }: PageType) {
    return (
        <ul className="grid lg:grid-cols-2 gap-4 grid-rows-auto-1fr">
            {data.common.contactUsLinks.map((contactUsLinks, key) => {
                return (
                    <ContactUsLink
                        linkType={contactUsLinks.linkType}
                        text={contactUsLinks.text}
                        imagePath={contactUsLinks.imagePath}
                        className="bg-icon-bg"
                        key={key}
                    />
                )
            })
            }
        </ul>
    )

}