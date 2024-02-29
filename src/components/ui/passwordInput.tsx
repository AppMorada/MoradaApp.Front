'use client'

import { ComponentProps, forwardRef, useState } from 'react'

import { FaEyeSlash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

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
          className={`flex h-[67px] w-[443px] flex-col rounded-lg border bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
        >
          <label className="relative flex cursor-text flex-col font-extrabold">
            {label}
            <input
              className="bg-background-contrast font-medium outline-none"
              type={showPassword ? 'text' : 'password'}
              {...props}
              ref={ref}
            />
            <div
              className="absolute right-0 top-4 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <IoEyeSharp size={20} />
              )}
            </div>
          </label>
        </div>
        {error && (
          <span className="text-problem m-2 text-sm font-medium">{error}</span>
        )}
      </div>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
