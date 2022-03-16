import { Wrapper, WrapperMedium } from "../wrapper"

export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className=" font-bold text-center text-5xl self-center pt-12">
      {children}
    </h1>
  )
}
