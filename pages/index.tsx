import { PageType } from '../components/Types'
import { NextPageContext } from 'next'
import { request } from '../lib/datocms'
import Banner from '../components/HomeComponents/banner'
import WhatWeDo from '../components/HomeComponents/whatwedo'
import AboutTheClinic from '../components/HomeComponents/about-the-clinic'
import ContactUs from '../components/HomeComponents/contact-us'
import { HOMEPAGE_QUERY } from '../components/Types'

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
