interface InputProps {
    label?: string
    type: 'text' | 'email' | 'password' | 'number'
    name: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <div className="flex h-[67px] w-[443px] flex-col rounded-lg bg-background-contrast px-4 py-2">
            <label className="font-extrabold">{label}</label>
            <input
                className="bg-background-contrast font-medium outline-none"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input
