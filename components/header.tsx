import { useLocale } from '@/lib/hooks'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import { ChangeLangButton } from './data-components/change-language-button'
import { PageType } from './types'

export default function Header({ data }: PageType) {
  const { dir } = useLocale()

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4 hidden md:block">
        <div className="mx-auto max-w-screen-lg p-4 md:px-8 bg-light rounded-lg">
          <ul className="grid grid-cols-7">
            <div className="grid grid-cols-5 col-span-4">
              <li className="border"></li>
              {data.common.appLinks.map((appLinks, key) => {
                return (
                  <li className="text-xl text-center" key={key}>
                    <a href={appLinks.relativeLink}>{appLinks.text}</a>
                  </li>
                )
              })}
            </div>
            <div className="grid grid-cols-5 justify-self-end col-span-3 place-items-center">
              <li>
                <ChangeLangButton className="ml-2" lang="am">{data.common.languageNames[0].am}</ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="ml-2" lang="ar">{data.common.languageNames[0].ar}</ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="ml-2" lang="en">{data.common.languageNames[0].en}</ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="ml-2" lang="he">{data.common.languageNames[0].he}</ChangeLangButton>
              </li>
              <li>
                <ChangeLangButton className="ml-2" lang="ti">{data.common.languageNames[0].ti}</ChangeLangButton>
              </li>
            </div>
          </ul>
        </div>
      </header >
    </>
  )
}
