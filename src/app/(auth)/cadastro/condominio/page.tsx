'use client'

import { useState } from 'react'
import Link from 'next/link'

import Input from '@/components/Input'

interface FormState {
    fullName: string
    cnpj: string
    email: string
    password: string
    condominium: string
    address: string
}

export default function CondominiumRegisterPage() {
    const [form, setForm] = useState<FormState>({
        fullName: '',
        cnpj: '',
        email: '',
        password: '',
        condominium: '',
        address: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <img
                src="/assets/images/brand/logo.svg"
                alt="Logo MoradaApp"
                width={268}
                height={98}
            />
            <form className="mt-[70px]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <Input
                        label="Nome do usuário administrador"
                        type="text"
                        name="fullName"
                        placeholder="Insira o nome do usuário"
                        value={form.fullName}
                        onChange={handleChange}
                    />
                    <Input
                        label="CNPJ"
                        type="text"
                        name="cnpj"
                        placeholder="XXX.XXX.XXX/0001-XX"
                        value={form.cnpj}
                        onChange={handleChange}
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        placeholder="Insira seu e-mail"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        name="password"
                        placeholder="Insira sua senha"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <Input
                        label="Nome do Condomínio"
                        type="password"
                        name="condominium"
                        placeholder="Insira o nome do condomínio"
                        value={form.condominium}
                        onChange={handleChange}
                    />
                    <Input
                        label="Endereço"
                        type="text"
                        name="address"
                        placeholder="Insira o endereço do condomínio"
                        value={form.address}
                        onChange={handleChange}
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
