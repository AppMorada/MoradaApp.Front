import { UseFormRegister } from 'react-hook-form'

interface InputProps {
    label?: string
    type: 'text' | 'email' | 'password' | 'number'
    name: string
    placeholder: string
    register: UseFormRegister<any>
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    register
}) => {
    return (
        <div className="flex h-[67px] w-[443px] flex-col rounded-lg bg-background-contrast px-4 py-2">
            <label className="font-extrabold">{label}</label>
            <input
                className="bg-background-contrast font-medium outline-none"
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
        </div>
    )
}

export default Input
