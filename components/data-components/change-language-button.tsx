/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

export const ChangeLangButton = ({
  className,
  children,
  lang,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <div>
      <button
        className={`md:min-w-[56px] md:min-h-[56px] ${className}`}
        onClick={() => changeLocale(lang)}
      >
        <img src={`icons/${lang}-icon.svg`} alt={lang} />
      </button>
    </div>
  )
}
