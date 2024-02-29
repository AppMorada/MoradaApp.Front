import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type RootInputProps = ComponentProps<'div'>

export const FormRoot = ({ className, ...props }: RootInputProps) => {
    return (
        <div
            className={cn(
                'flex flex-col rounded-lg bg-background-contrast px-4 py-2 ring-primary focus-within:ring-2',
                className
            )}
            {...props}
        />
    )
}
