import { PageType } from '@/components/types'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'
import Banner from '../components/home-components/banner'
import WhatWeDo from '../components/home-components/what-we-do'
import AboutTheClinic from '../components/home-components/about-the-clinic'
import ContactUs from '../components/home-components/contact-us'
import { HOMEPAGE_QUERY } from '../components/types'

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
