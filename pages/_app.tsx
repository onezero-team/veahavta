import React from 'react'
import Layout from '@/components/layout'
import About from 'pages/about'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
// import Home from '@/components/home'
import WhatWeDo from '@/components/whatWeDo'
import Contact from '@/components/contact'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout pageProps={pageProps}>
        <About />
        <WhatWeDo />
        <Contact />
      </Layout>
    </>
  )
}

export default MyApp
