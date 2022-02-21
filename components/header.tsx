import { useLocale } from '@/lib/hooks'
import { useState } from 'react'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'

export default function Header({ locale }: { locale: string }) {
  const [headerLinks, setHeader] = useState([
    'בית',
    'אודות המרפאה',
    'צרו קשר',
    'תמכו בנו',
  ]) // set by default to heb

  const hebHeaderLinks = ['בית', 'אודות המרפאה', 'צרו קשר', 'תמכו בנו']
  const engHeaderLinks = [
    'Home',
    'About the clinic',
    'Contact us',
    'Support us',
  ]
  const { dir } = useLocale()
  switch (locale) {
    case 'he': {
      // setHeader(hebHeaderLinks);
      break
    }
    case 'eng': {
      setHeader(engHeaderLinks)
      break
    }
    default:
      break
  }
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="mx-auto max-w-screen-lg p-4 md:px-8 bg-light rounded-lg">
          <ul className="flex flex-row">
            <li className="text-2xl text-center">icon</li>
            {headerLinks.map((i, key) => {
              return (
                <li className="text-2xl text-center mr-7" key={key}>
                  <a href="#">{i}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </>
  )
}
