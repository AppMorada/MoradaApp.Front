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
      <>
        <div
          className={`flex w-full flex-col rounded-lg border-2 bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
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
              className="absolute right-5 top-6 cursor-pointer"
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
          <span className="m-2 text-sm font-medium text-red-500">{error}</span>
        )}
      </>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'

// export const PasswordInput = ({
//   showPassword,
//   passwordShow,
//   register,
//   errors
// }: PasswordInputProps) => {
//   return (
//     <div className="relative">
//       <Input
//         label="Senha"
//         type={showPassword ? 'text' : 'password'}
//         name="password"
//         placeholder="Insira sua senha"
//         {...register('password')}
//         error={errors.password?.message}
//       />
//       <div
//         className="absolute right-5 top-6 cursor-pointer"
//         onClick={passwordShow}
//       >
//         {showPassword ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
//       </div>
//     </div>
//   )
// }
