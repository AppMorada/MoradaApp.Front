import { ComponentProps, forwardRef } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        className="h-12 w-full rounded-lg bg-primary font-extrabold text-background"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
