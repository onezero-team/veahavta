import { Wrapper } from '../wrapper'

export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-center text-5xl self-center md:pt-12 2xl:max-w-[400px]">
      {children}
    </h1>
  )
}
