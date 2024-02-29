import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type FormInputProps = ComponentProps<'input'>

export const InputForm = forwardRef<HTMLInputElement, FormInputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                className={cn(
                    'font-nevermind bg-transparent font-medium outline-none placeholder:text-neutral',
                    className
                )}
                {...props}
                type={type}
                ref={ref}
            />
        )
    }
)

InputForm.displayName = 'InputForm'
