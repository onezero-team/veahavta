export const PageHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="text-[82px] pt-24">
      {children.slice(0, 13)}
      <br></br>
      {children.slice(13)}
    </h1>
  )
}
