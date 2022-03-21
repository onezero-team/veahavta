import { useLocale } from '@/lib/hooks'
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
      <header className="h-header z-10 pt-4 px-4">
        <div className="mx-auto max-w-screen-lg p-4 md:px-8 bg-light rounded-lg">
          header
        </div>
      </header>
    </>
  )
}
