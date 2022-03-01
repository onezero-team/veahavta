export type Common = {
  contactUsLinks: Array<{
    text: string
    linkType: string
    imagePath: string
  }>
  contactUsFormFirstName: string
  contactUsFormLastName: string
  contactUsFormEmail: string
  contactUsFormPhone: string
  contactUsFormMessage: string
  contactUsFormSendButton: string
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
  contactUsFormErrorEmailInvalid
  contactUsFormErrorEmailMissing
  contactUsFormErrorPhoneInvalid
  contactUsFormErrorPhoneMissing
  contactUsFormErrorMessageMissing
  footerMenuTitle
  footerContactUsTitle
  footerScheduleButton
  footerSupportUsButton
}
`
