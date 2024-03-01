import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type FormLabelProps = ComponentProps<'label'>

export const LabelForm = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn('font-nevermind text-base font-bold', className)}
        {...props}
        ref={ref}
      />
    )
  }
)

LabelForm.displayName = 'LabelForm'
