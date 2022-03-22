export type Common = {
  contactUsLinks: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
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

export const COMMON_QUERY_STRING = (locale: string) => `
common(locale: ${locale}) {
  languageNames{
    he
    en
    ar
    am
    ti
  }
  contactUsLinks {
    text
    linkType
    linkValue
    imagePath
    linkValue
  }
  appLinks {
    text
    relativeLink
  }
  appLinks {
    text
    relativeLink
  }
  contactUsFormFirstName
  contactUsFormLastName
  contactUsFormEmail
  contactUsFormPhone
  contactUsFormMessage
  contactUsFormSendButton
  contactUsFormSuccessMessage
  contactUsFormErrorFirstNameMissing
  contactUsFormErrorLastNameMissing
  contactUsFormErrorEmailMissing
  contactUsFormErrorEmailInvalid
  contactUsFormErrorPhoneMissing
  contactUsFormErrorPhoneInvalid
  contactUsFormErrorMessageMissing
  footerMenuTitle
  footerContactUsTitle
  footerScheduleButton
  footerSupportUsButton
}
`
