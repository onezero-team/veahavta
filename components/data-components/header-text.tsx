export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1
      className="max-w-[400px] font-bold text-center text-2xl 
    md:text-5xl self-center pt-12"
    >
      {children}
    </h1>
  )
}
