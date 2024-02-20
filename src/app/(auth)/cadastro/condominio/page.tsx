'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Input from '@/components/input'


interface FormData {
    fullName: string
    cnpj: string
    email: string
    password: string
    condominium: string
    address: string
}

export default function CondominiumRegisterPage() {
    const { register, handleSubmit } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <img
                src="/assets/images/brand/logo.svg"
                alt="Logo MoradaApp"
                width={268}
                height={98}
            />
            <form className="mt-14" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input
                        label="Nome do usuário administrador"
                        type="text"
                        name="fullName"
                        placeholder="Insira o nome do usuário"
                        register={register}
                    />
                    <Input
                        label="CNPJ"
                        type="text"
                        name="cnpj"
                        placeholder="XXX.XXX.XXX/0001-XX"
                        register={register}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        placeholder="Insira seu e-mail"
                        register={register}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        name="password"
                        placeholder="Insira sua senha"
                        register={register}
                    />
                    <Input
                        label="Nome do Condomínio"
                        type="text"
                        name="condominium"
                        placeholder="Insira o nome do condomínio"
                        register={register}
                    />
                    <Input
                        label="Endereço"
                        type="text"
                        name="address"
                        placeholder="Insira o endereço do condomínio"
                        register={register}
                    />
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
