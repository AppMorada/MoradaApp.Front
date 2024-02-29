'use client'

import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div
          className={`flex h-[67px] w-[443px] flex-col rounded-lg border bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
        >
          <label className="flex cursor-text flex-col font-extrabold">
            {label}
          </label>
          <input
            className="bg-background-contrast font-medium outline-none"
            {...props}
            ref={ref}
          />
        </div>
        {error && (
          <span className="text-problem m-2 text-sm font-medium">{error}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
