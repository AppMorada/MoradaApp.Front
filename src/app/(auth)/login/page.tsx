'use client'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  Icon,
  Input,
  LinkLogin,
  Logo,
  PasswordInput
} from '@/components/ui'

const schema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),
  password: z.string().min(1, { message: 'Insira sua senha.' })
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
  }

  return (
    <main className="relative flex h-dvh w-full flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-8 top-8 flex max-w-min items-center justify-center gap-2 rounded-full border bg-background px-4 py-2.5 font-bold text-typography"
      >
        <Icon.chevronLeft className="size-8 rounded-full bg-primary text-background" />
        Voltar
      </Link>
      <section className="flex flex-col items-center justify-center">
        <Logo />
        <form
          className="mt-12 flex w-full flex-col gap-4 px-4 sm:w-[444px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="E-mail"
            type="text"
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

          <Button type="submit">Entrar</Button>
        </form>
        <div className="mt-8 flex flex-col items-center justify-center">
          <LinkLogin
            text="Cadastre-se"
            span="Não possui uma conta?"
            href="/cadastro/morador"
          />
        </div>
      </section>
    </main>
  )
}
