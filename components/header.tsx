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
          <ul className="grid">
            <div className="grid grid-cols-auto-1fr-auto gap-2.5 lg:gap-5">
              <div className="grid place-items-center">
                <Image
                  src="/icons/veahavta-icon.svg"
                  height={'62px'}
                  width={'142px'}
                  alt="ואהבת לוגו"
                />
              </div>
              <div className="grid grid-cols-4-auto-1fr gap-2.5 lg:gap-5 place-items-center">
                {data.common.appLinks.map((appLinks, key) => {
                  return (
                    <li className="text-2xl hidden md:block" key={key}>
                      <Link href={`/${appLinks.relativeLink}`}>
                        <a>{appLinks.text}</a>
                      </Link>
                    </li>
                  )
                })}
              </div>
              <div className="grid grid-cols-5 gap-x-2.5 place-items-center">
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
