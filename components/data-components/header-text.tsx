export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1
      className="w-3/6 font-bold text-center pt-12 text-2xl 
    md:w-5/12 md:text-5xl md:pt-24
    2xl:w-4/12 2xl:text-7xl
    "
    >
      {children}
    </h1>
  )
}
