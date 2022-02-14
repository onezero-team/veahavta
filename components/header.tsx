import { useLocale } from '@/lib/hooks'
import Home from './home'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'

export default function Header() {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      {/* <header className="h-header z-10">header</header> */}
      <Home />
    </>
  )
}
