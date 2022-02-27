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
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <button className={`w-10 h-10 border ${className}`} onClick={() => changeLocal(lang)}>
      {children}
    </button>
  )
}
