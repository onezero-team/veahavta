import { useLocale } from '@/lib/hooks'
import { useState } from 'react'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import { Button } from './dataComponents/button'
import { ChangeLangButton } from './dataComponents/changeLangButton'
import { NextRouter, useRouter } from 'next/router'

export default function Header({ locale }: { locale: string }) {
  const [headerLinks, setHeader] = useState([
    'בית',
    'אודות המרפאה',
    'צרו קשר',
    'תמכו בנו',
  ]) // set by default to heb

  // const hebHeaderLinks = ['בית', 'אודות המרפאה', 'צרו קשר', 'תמכו בנו']
  const engHeaderLinks = [
    'Home',
    'About the clinic',
    'Contact us',
    'Support us',
  ]
  const { dir } = useLocale();
  switch (locale) {
    case 'he': {
      // setHeader(hebHeaderLinks); // replace to 'he' by fetch data
      break;
    }
    case 'eng': {
      setHeader(engHeaderLinks);
      break;
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
      <header className="h-header z-10 pt-4 px-4 hidden md:block">
        <div className="mx-auto max-w-screen-lg p-4 md:px-8 bg-light rounded-lg">
          <ul className="grid grid-cols-6">
            <div className="grid grid-cols-5 col-span-4">
              <li className="text-2xl text-center border"></li>
              {headerLinks.map((i, key) => {
                return (
                  <li className="text-2xl text-center" key={key}>
                    <a href="#">{i}</a>
                  </li>
                )
              })}
            </div>
            <div className="grid grid-cols-4 justify-self-end col-span-2 place-items-center">
              <li>
                <ChangeLangButton className="ml-2" lang="en">
                  en {/* string en instert menually because it doesnt exist in the fetched data */}
                </ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="ml-2" lang="he">
                  he
                </ChangeLangButton>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}
