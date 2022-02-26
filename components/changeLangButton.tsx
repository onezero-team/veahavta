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
  const changeLocal = (lang: string) => {
    const { pathname, asPath, query } = router
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <button className={`${className}`} onClick={() => changeLocal(lang)}>
      {children}
    </button>
  )
}
