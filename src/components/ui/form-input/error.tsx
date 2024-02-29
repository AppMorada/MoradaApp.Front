type ErrorMessageFormProps = {
    error: string
}

export const ErrorMessageForm = ({ error }: ErrorMessageFormProps) => {
    return <p className="text-danger/75 text-sm">{error}</p>
}
