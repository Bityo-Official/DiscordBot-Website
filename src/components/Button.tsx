import { ReactNode } from "react"

const Button = ({ children, className, onClick }: { children: ReactNode, className: string, onClick: () => void }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button