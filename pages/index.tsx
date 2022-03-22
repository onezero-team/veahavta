import { PageType } from '@/components/types'
import { Button } from '@/components/button'
import { Common, COMMON_QUERY_STRING } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'
import Banner from '../components/home-components/banner'
import WhatWeDo from '../components/home-components/what-we-do'
import AboutTheClinic from '../components/home-components/about-the-clinic'
import ContactUs from '../components/home-components/contact-us'
import { HOMEPAGE_QUERY } from '../components/types'

type PageType = {
  data: {
    homepage: Homepage
    common: Common
  }
}

type Homepage = {
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

const HOMEPAGE_QUERY = (locale: string) => `
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
  ${COMMON_QUERY_STRING(locale)}
}`


export async function getStaticProps({ locale }: NextPageContext) {
  const data = await request({
    query: HOMEPAGE_QUERY(locale as string),
  })
  return {
    props: { data },
  }
}

export default function Home({ data }: PageType) {
  console.log('Home data\n=========\n', data)
  return (
    <>
      <Banner data={data} />
      <AboutTheClinic data={data} />
      <WhatWeDo data={data} />
      <ContactUs data={data} />
    </>
  )
}
