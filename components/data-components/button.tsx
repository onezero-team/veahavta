export const Button = ({
  className,
  children,
  type,
  text,
}: {
  className?: string
  children?: React.ReactNode
  type?: string
  text?: string
}) => {
  return <button className={`${className}`}>{text}</button>
}
