'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LinkLogin } from '@/components/ui/linkLogin'
import { Logo } from '@/components/ui/logo'
import { PasswordInput } from '@/components/ui/passwordInput'

const schema = z.object({
  fullName: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
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
    )
})

type FormData = z.infer<typeof schema>

export default function ResidentRegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }

  return (
    <section className=" flex min-h-screen flex-col items-center justify-center ">
      <Logo />
      <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center gap-4">
          <Input
            label=" Nome Completo"
            type="text"
            placeholder="Insira o nome do usuário"
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <Input
            label=" CPF"
            type="text"
            placeholder="000.000.000-00"
            {...register('cpf')}
            error={errors.cpf?.message}
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Insira seu e-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <PasswordInput
            label="Senha"
            placeholder="Insira sua senha"
            {...register('password')}
            error={errors.password?.message}
          />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <Button>Cadastrar</Button>
          <LinkLogin href="/login" text="Login" />
        </div>
      </form>
    </section>
  )
}
