
export const Button = ({
  className,
  children,
  type,
}: {
  className?: string
  children?: React.ReactNode
  type?: string
}) => {
  return <button className={`${className}`}>{children}</button>
}
