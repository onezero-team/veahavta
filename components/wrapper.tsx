import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`
      w-full max-w-wrp grid md:px-12 lg:px-28 px-6 py-3 md:py-5 mx-auto ${className}`}
    >
      {children}
    </section>
  )
}