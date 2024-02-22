'use client'
import {useForm} from "react-hook-form";
import Link from 'next/link'
import Input from '@/components/Input';
import Image from "next/image";


interface FormData{
    fullName: string
    cpf: string
    email: string
    password: string

}

export default function ResidentRegisterPage() {

    const {register, handleSubmit} = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <Image src="/assets/images/brand/logo.svg"
                 alt="Logo MoradaApp"
                 width={268}
                 height={98} />

            <form className="mt-14" onSubmit={handleSubmit(onSubmit)}>
                <div className = "flex flex-col items-center justify-center gap-4">
                    <Input
                        label=" Nome Completo"
                        type="text"
                        name="fullName"
                        placeholder="Insira o nome do usuário"
                        register={register}

                    />

                    <Input
                        label=" CPF"
                        type="text"
                        name="cpf"
                        placeholder="000.000.000-00"
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



                </div>

                <div className="flex flex-col justify-center items-center mt-8">

                    <button className="bg-primary h-12 w-[442px] rounded-lg text-background font-extrabold"
                            type="submit"
                    >
                        Confirmar Cadastro
                    </button>


                    <div className="flex gap-1 m-4">
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
