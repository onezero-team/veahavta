import { Button } from '@/components/button'
import { fixCMSLocale } from '@/lib/hooks'
import themePreval from '@/lib/theme.preval'
import { NextPageContext } from 'next'
import { PageHeader } from '../components/text'
import { request } from '../lib/datocms'

type PageType = {
  data: Data
}

type Data = {
  homepage: Homepage
  common: Common
}

type Homepage = {
  title: string
  aboutTitle: string
}

type Common = {
  email: string
}

const HOMEPAGE_QUERY = (locale: string) => `
query Homepage {
  homepage(locale: ${locale}) {
    title
    aboutTitle
  }
  common {
    email
  }
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
        <Button>Click</Button>
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
      <h2>{data.homepage.aboutTitle}</h2>
    </>
  )
}
const WhatWeDo = ({ data }: PageType) => {
  return <></>
}
const ContactUs = ({ data }: PageType) => {
  return (
    <>
      <a href={`mailto:${data.common.email}`}>{data.common.email}</a>
    </>
  )
}
