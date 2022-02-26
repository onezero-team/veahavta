import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import React from 'react'

export default function Layout({ children, pageProps }: any) {
  const { dir, locale } = useLocale()
  return (
    <>
      <div className="app-wrapper font-['Assistant']" dir={dir}>
        <Header locale={locale} />
        <Main>{children}</Main>
        <Footer data={children.props.data} />
      </div>
      <style jsx global>
        {`
          html {
            min-height: 100% !important;
            height: 100%;
            //scrollbar-gutter: stable;
          }
          body {
            min-height: 100% !important;
            height: 100%;
          }
          #__next {
            min-height: -webkit-fill-available;
            height: 100%;
          }
          .app-wrapper {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            min-height: -webkit-fill-available;
            height: 100%;
          }

          *:focus-visible {
            /* remove default focus style */
            outline: none !important;
            /* custom focus styles */
            box-shadow: 0 0 0 2px ${theme.colors.primary} !important;
            border-radius: ${theme.borderRadius['2xl']};
          }
        `}
      </style>
    </>
  )
}
