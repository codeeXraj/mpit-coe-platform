import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'cyan' | 'neon'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:-translate-y-0.5",
      primary: "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:-translate-y-0.5",
      outline: "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      cyan: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:-translate-y-0.5",
      neon: "bg-transparent border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white",
    }

    const sizes = {
      default: "h-12 px-6 py-3 text-base",
      sm: "h-9 px-4 py-2 text-sm",
      lg: "h-14 px-8 py-4 text-lg",
      xl: "h-16 px-10 py-4 text-xl",
      icon: "h-10 w-10 p-0",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
