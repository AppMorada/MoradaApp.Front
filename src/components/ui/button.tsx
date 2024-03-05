import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils/styles'

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        className={cn(
          'h-12 w-full rounded-lg bg-primary font-extrabold text-background',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
