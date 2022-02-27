import { useLocale } from '@/lib/hooks'
import { NextRouter, useRouter } from 'next/router'

export const Button = ({
  className,
  children,
  type,
}: {
  className?: string
  children?: React.ReactNode
  type?: string
}) => {
  const router = useRouter()
  const changeLocal = (lang: string) => {
    const { pathname, asPath, query } = router
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return <button className={`${className}`}>{children}</button>
}
