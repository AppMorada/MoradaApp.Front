'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Dialog } from '@/components/ui/dialog'
import { FormInput } from '@/components/ui/form-input'
import { Icon } from '@/components/ui/icon'

const formSchema = z
  .object({
    name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    cpf: z.string().length(11, 'O CPF deve conter 11 caracteres'),
    email: z
      .string()
      .min(1, 'O e-mail é obrigatório')
      .email('Formato de e-mail inválido'),
    password: z
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'A senha deve conter pelo menos um caractere especial'
      ),
    checkPassword: z.string()
  })
  .refine((data) => data.password === data.checkPassword, {
    message: 'As senhas não coincidem',
    path: ['checkPassword']
  })

type FormData = z.infer<typeof formSchema>

const EMAIL = 'registrado@gmail.com'

type InputValueModel = {
  name: keyof FormData
  label: string
  placeholder: string
  type: string
}

const inputsValues: InputValueModel[] = [
  { name: 'name', label: 'Nome', placeholder: 'Insira Nome', type: 'text' },
  { name: 'cpf', label: 'CPF', placeholder: '000.000', type: 'text' },
  { name: 'email', label: 'Email', placeholder: 'a@mail.com', type: 'text' },
  {
    name: 'password',
    label: 'Senha',
    placeholder: 'a@mail.com',
    type: 'password'
  },
  {
    name: 'checkPassword',
    label: 'Confirmar senha',
    placeholder: 'a@mail.com',
    type: 'password'
  }
]

export const FormRegisterResident = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  const onSubmit = async (data: FormData) => {
    if (data.email === EMAIL) {
      setError('email', { message: 'Email já cadastrado.' })

      return
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className="flex w-[444px] flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputsValues.map(({ name, label, placeholder, type }) => (
        <div key={name}>
          <FormInput.Root className={errors[name] && 'border-2 border-danger'}>
            <FormInput.Label
              htmlFor={name}
              className={errors[name] && 'text-danger'}
            >
              {label}
            </FormInput.Label>
            <div className="flex w-full items-center gap-2">
              <FormInput.Input
                {...register(name)}
                id={name}
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : 'text'
                }
                placeholder={placeholder}
                className={cn(
                  'w-full',
                  errors[name] && 'placeholder:text-danger'
                )}
              />
              {type === 'password' && (
                <button
                  type="button"
                  className="rounded"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <Icon.eyeSlash className="size-6 cursor-pointer" />
                  ) : (
                    <Icon.eye className="size-6 cursor-pointer" />
                  )}
                  <span className="sr-only">Mostrar ou esconder senha</span>
                </button>
              )}
            </div>
          </FormInput.Root>
          {errors[name]?.message && (
            <FormInput.ErrorMessage error={errors[name]?.message || ''} />
          )}
        </div>
      ))}

      <Dialog.Root>
        <Dialog.Trigger>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex h-[72px] w-full items-center justify-center rounded-lg bg-primary font-extrabold text-background disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirmar cadastro
          </button>
        </Dialog.Trigger>
        {isSubmitSuccessful && (
          <Dialog.Content>
            <div className="p-8">Modal aqui</div>
          </Dialog.Content>
        )}
      </Dialog.Root>
    </form>
  )
}
