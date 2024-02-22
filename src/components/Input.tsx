import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    label?: string
    type: string
    name: string
    placeholder: string
    register: UseFormRegister<any>
    error?: string
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    register,
    error
}) => {
    return (
        <div>
            <div
                className={`flex h-[67px] w-[443px] flex-col rounded-lg bg-background-contrast px-4 py-2 ${error ? 'border-red-500' : ''}`}
            >
                <label className="font-extrabold">{label}</label>
                <input
                    className="bg-background-contrast font-medium outline-none"
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                />
            </div>
            {error && (
                <span className="m-2 text-sm font-medium text-red-500">
                    {error}
                </span>
            )}
        </div>
    )
}

export default Input
