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

export const COMMON_QUERY_STRING = `
common {
  contactUsLinks {
    text
    linkType
    imagePath
  }
  contactUsFormFirstName
  contactUsFormLastName
  contactUsFormEmail
  contactUsFormPhone
  contactUsFormMessage
  contactUsFormSendButton
}
`
