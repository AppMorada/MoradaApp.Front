type ErrorMessageFormProps = {
  error: string
}

export const ErrorMessageForm = ({ error }: ErrorMessageFormProps) => {
  return <p className="text-sm text-danger/75">{error}</p>
}
