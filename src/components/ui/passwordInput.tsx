'use client'

import { ComponentProps, forwardRef, useState } from 'react'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'

interface PasswordInputProps extends ComponentProps<'input'> {
  error?: string
  label: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="w-full">
        <div
          className={`flex w-full flex-col rounded-lg border-2 bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
        >
          <label
            className={`relative flex flex-col font-extrabold ${error ? 'text-red-500' : ''}`}
          >
            {label}
            <input
              className={`bg-background-contrast font-medium outline-none ${error ? 'text-red-500' : ''}`}
              type={showPassword ? 'text' : 'password'}
              {...props}
              ref={ref}
            />
            <div
              className="absolute right-0 top-4 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </label>
        </div>
        {error && (
          <span className="m-2 text-sm font-medium text-danger">{error}</span>
        )}
      </div>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
