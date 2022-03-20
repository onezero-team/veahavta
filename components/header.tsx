import { useLocale } from '@/lib/hooks'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import { ChangeLangButton } from './data-components/change-language-button'
import { PageType } from './types'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ data }: PageType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="mx-auto max-w-screen-lg p-2.5 md:px-6 bg-light rounded-lg">
          <ul className="grid ">
            <div className="grid grid-cols-auto-1fr-auto">
              <div>
                <Image
                  src="/icons/veahavta-icon.svg"
                  height={'62px'}
                  width={'142px'}
                  alt="ואהבת לוגו"
                />
                {/* <img src="/icons/veahavta-icon.svg" height={'62px'} width={'142px'} alt="ואהבת לוגו" /> */}
              </div>
              <div>
                {data.common.appLinks.map((appLinks, key) => {
                  return (
                    <li className="text-xl hidden md:block" key={key}>
                      <Link href={`/${appLinks.relativeLink}`}>
                        <a>{appLinks.text}</a>
                      </Link>
                    </li>
                  )
                })}
              </div>
              {/*  grid-cols-5 gap-2.5 justify-self-end md:col-span-3 place-items-center */}
              <div className="grid grid-cols-5 gap-x-2.5">
                <li>
                  <ChangeLangButton className="" lang="ar">
                    {data.common.languageNames[0].ar}
                  </ChangeLangButton>
                </li>
                <li>
                  <ChangeLangButton className="" lang="he">
                    {data.common.languageNames[0].he}
                  </ChangeLangButton>
                </li>
                <li>
                  <ChangeLangButton className="" lang="en">
                    {data.common.languageNames[0].en}
                  </ChangeLangButton>
                </li>
                <li>
                  <ChangeLangButton className="" lang="am">
                    {data.common.languageNames[0].am}
                  </ChangeLangButton>
                </li>
                <li>
                  <ChangeLangButton className="" lang="ti">
                    {data.common.languageNames[0].ti}
                  </ChangeLangButton>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}
