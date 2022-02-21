export const Button = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <button
      className={`text-2xl font-bold bg-primary text-light px-8 py-2 rounded-full m-12 font-bold ${className}`}
    >
      {children}
    </button>
  )
}
