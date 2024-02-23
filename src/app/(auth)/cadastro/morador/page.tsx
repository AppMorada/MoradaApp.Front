'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useForm } from 'react-hook-form'

import Input from '@/components/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'

interface FormData {
    fullName: string
    cpf: string
    email: string
    password: string
}

const schema = z.object({
    fullName: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    cpf: z.string().length(11, 'O CPF deve conter 11 caracteres'),
    email: z.string().min(1, 'O e-mail é obrigatório').email('Formato de e-mail inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
        .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial')

})

export default function ResidentRegisterPage() {
    const [showPassword, setShowPassword] = useState(false)

    const { 
        register, 
        handleSubmit,
        reset, 
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        reset()
    }

    const passwordShow = () => {
        setShowPassword(!showPassword)
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <Image
                src="/assets/images/brand/logo.svg"
                alt="Logo MoradaApp"
                width={268}
                height={98}
            />

            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input
                        label=" Nome Completo"
                        type="text"
                        name="fullName"
                        placeholder="Insira o nome do usuário"
                        register={register}
                        error={errors.fullName?.message}
                        />

                    <Input
                        label=" CPF"
                        type="text"
                        name="cpf"
                        placeholder="000.000.000-00"
                        register={register}
                        error={errors.cpf?.message}
                        />

                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        placeholder="Insira seu e-mail"
                        register={register}
                        error={errors.email?.message}
                    />

<div className="relative">
                        <Input
                            label="Senha"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Insira sua senha"
                            register={register}
                            error={errors.password?.message}
                        />
                        <div
                            className="absolute right-5 top-6 cursor-pointer"
                            onClick={passwordShow}
                        >
                            {showPassword ? (
                                <FaEyeSlash size={20} />
                            ) : (
                                <IoEyeSharp size={20} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center">
                    <button
                        className="h-12 w-[442px] rounded-lg bg-primary font-extrabold text-background"
                        type="submit"
                    >
                        Confirmar Cadastro
                    </button>

                    <div className="m-4 flex gap-1">
                        <span className="font-medium">
                            Já possui uma conta?
                        </span>
                        <Link className="font-medium text-primary" href="#">
                            Faça o login
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    )
}
