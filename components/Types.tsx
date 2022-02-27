import { COMMON_QUERY_STRING } from '@/lib/interface'

export type Homepage = {
  title: string
  description: string
  getToKnowUsButton: string
  aboutHeading: string
  aboutTitle: string
  aboutUsText: string
  aboutUsButton: string
  whatWeDoHeading: string
  whatWeDoTitle: string
  whatWeDoCards: Array<{
    title: string
    text: string
    imagePath: string
  }>
  contactUsHeading: string
  contactUsTitle: string
  contactUsText: string
}
export type Common = {
  contactUsLinks: Array<{
    text: string
    linkType: string
    imagePath: string
  }>
  appLinks: Array<{
    text: string
    relativeLink:string
  }>
  languageNames: Array<{
    he: string
    en: string
    ar: string
    am: string
    ti: string
  }>
   contactUsFormFirstName: string
  contactUsFormLastName: string
  contactUsFormEmail: string
  contactUsFormPhone: string
  contactUsFormMessage: string
  contactUsFormSendButton: string
  footerMenuTitle: string
  footerContactUsTitle: string
  footerScheduleButton: string
  footerSupportUsButton: string
}

export type PageType = {
  data: {
    homepage: Homepage
    common: Common
  }
}

export function HOMEPAGE_QUERY(locale: string) {
  return `
query Homepage {
  homepage(locale: ${locale}) {
    title
    description
    getToKnowUsButton
    aboutHeading
    aboutTitle
    aboutUsText
    aboutUsButton
    whatWeDoHeading
    whatWeDoTitle
    whatWeDoCards {
      title
      text
      imagePath
    }
    contactUsHeading
    contactUsTitle
    contactUsText
  }
  ${COMMON_QUERY_STRING}
}`
}
