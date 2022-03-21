export const Button = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <button
      className={`font-bold bg-primary text-light px-8 py-2 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}
