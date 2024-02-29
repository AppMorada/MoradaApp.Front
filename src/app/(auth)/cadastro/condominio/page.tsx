'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LinkLogin } from '@/components/ui/linkLogin'
import { Logo } from '@/components/ui/logo'
import { PasswordInput } from '@/components/ui/passwordInput'

const schema = z.object({
   fullName: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
   cnpj: z.string().length(14, 'O CNPJ deve conter 14 caracteres'),
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
   condominium: z.string().min(1, 'O nome do condomínio é obrigatório'),
   address: z.string().min(1, 'O endereço é obrigatório')
})

type FormData = z.infer<typeof schema>

export default function CondominiumRegisterPage() {
   const [showPassword, setShowPassword] = useState(false)

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm<FormData>({
      resolver: zodResolver(schema)
   })

   const onSubmit = () => {
      reset()
   }

   const passwordShow = () => {
      setShowPassword(!showPassword)
   }

   return (
      <section className="flex min-h-screen flex-col items-center justify-center">
         <Logo />

         <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center justify-center gap-4">
               <Input
                  label="Nome do usuário administrador"
                  type="text"
                  name="fullName"
                  placeholder="Insira o nome do usuário"
                  register={register}
                  error={errors.fullName?.message}
               />
               <Input
                  label="CNPJ"
                  type="text"
                  name="cnpj"
                  placeholder="XXX.XXX.XXX/0001-XX"
                  register={register}
                  error={errors.cnpj?.message}
               />
               <Input
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail"
                  register={register}
                  error={errors.email?.message}
               />
               <PasswordInput
                  showPassword={showPassword}
                  passwordShow={passwordShow}
                  register={register}
                  errors={errors}
               />
               <Input
                  label="Nome do Condomínio"
                  type="text"
                  name="condominium"
                  placeholder="Insira o nome do condomínio"
                  register={register}
                  error={errors.condominium?.message}
               />
               <Input
                  label="Endereço"
                  type="text"
                  name="address"
                  placeholder="Insira o endereço do condomínio"
                  register={register}
                  error={errors.address?.message}
               />
            </div>
            <div className="mt-8 flex flex-col items-center justify-center">
               <Button submit="Cadastrar" />
               <LinkLogin href="/login" text="Login" />
            </div>
         </form>
      </section>
   )
}
