import { UseFormRegister } from 'react-hook-form'

interface InputProps {
   label?: string
   type: string
   name: string
   placeholder: string
   register: UseFormRegister<any>
   error?: string
}

export const Input = ({
   label,
   type,
   name,
   placeholder,
   register,
   error
}: InputProps) => {
   return (
      <div>
         <div
            className={`flex h-[67px] w-[443px] flex-col rounded-lg bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
         >
            <label className="flex cursor-text flex-col font-extrabold">
               {label}
               <input
                  className="bg-background-contrast font-medium outline-none"
                  type={type}
                  placeholder={placeholder}
                  {...register(name)}
               />
            </label>
         </div>
         {error && (
            <span className="m-2 text-sm font-medium text-red-500">
               {error}
            </span>
         )}
      </div>
   )
}
