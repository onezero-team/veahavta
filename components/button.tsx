export const Button = ({
  onClick,
  className,
  children,
  type,
}: {
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  type?: string
}) => {
  return (
    <button
      className={`font-bold  text-light px-8 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
