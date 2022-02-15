import { Button } from '@/components/button'
import { fixCMSLocale } from '@/lib/hooks'
import { Common, COMMON_QUERY_STRING } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import { NextPageContext } from 'next'
import { PageHeader } from '../components/text'
import { request } from '../lib/datocms'

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
  ${COMMON_QUERY_STRING}
}
`

export async function getStaticProps({ locale }: NextPageContext) {
  locale = fixCMSLocale(locale)
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

const Banner = ({ data }: PageType) => {
  return (
    <>
      <div className="wrapper min-h-screen-50">
        <div className="background"></div>
        <PageHeader>{data.homepage.title}</PageHeader>
        <p>{data.homepage.description}</p>
        <Button>{data.homepage.getToKnowUsButton}</Button>
      </div>
      <style jsx>{`
        div.wrapper {
          margin-top: -${themePreval.height.header};
          padding-top: ${themePreval.height.header};
          position: relative;
        }
        div.background {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            109.17deg,
            rgba(1, 157, 177, 0.21) 38.49%,
            #019db1 98.95%
          );
        }
      `}</style>
    </>
  )
}

const AboutTheClinic = ({ data }: PageType) => {
  return (
    <>
      <h2 className="text-lg">
        <span className="text-md text-accent">
          {data.homepage.aboutHeading}
        </span>
        {data.homepage.aboutTitle}
      </h2>
      <p>{data.homepage.aboutTitle}</p>
      <Button>{data.homepage.aboutUsButton}</Button>
    </>
  )
}
const WhatWeDo = ({ data }: PageType) => {
  return <></>
}
const ContactUs = ({ data }: PageType) => {
  return (
    <>
      <h2>{data.homepage.contactUsHeading}</h2>
      <a
        type={data.common.contactUsLinks[0].linkType}
        href={`mailto:${data.common.contactUsLinks[0].text}`}
      >
        {data.common.contactUsLinks[0].text}
      </a>
    </>
  )
}
