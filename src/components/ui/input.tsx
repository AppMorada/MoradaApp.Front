'use client'

import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <>
        <div
          className={`flex w-full flex-col rounded-lg border-2 bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
        >
          <label className="flex cursor-text flex-col font-extrabold">
            {label}
            <input
              className="bg-background-contrast font-medium outline-none"
              {...props}
              ref={ref}
            />
          </label>
        </div>
        {error && (
          <span className="m-2 text-sm font-medium text-red-500">{error}</span>
        )}
      </>
    )
  }
)

Input.displayName = 'Input'
