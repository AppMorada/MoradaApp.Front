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
            .regex(
                /[a-z]/,
                'A senha deve conter pelo menos uma letra minúscula'
            )
            .regex(
                /[A-Z]/,
                'A senha deve conter pelo menos uma letra maiúscula'
            )
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
            <div>
                <FormInput.Root
                    className={errors.name && 'border-2 border-danger'}
                >
                    <FormInput.Label
                        htmlFor="name"
                        className={errors.name && 'text-danger'}
                    >
                        Nome
                    </FormInput.Label>
                    <FormInput.Input
                        {...register('name')}
                        id="name"
                        placeholder="Insira seu nome completo"
                        className={errors.name && 'placeholder:text-danger'}
                    />
                </FormInput.Root>
                {errors.name?.message && (
                    <FormInput.ErrorMessage error={errors.name.message} />
                )}
            </div>
            <div>
                <FormInput.Root
                    className={errors.cpf && 'border-2 border-danger'}
                >
                    <FormInput.Label
                        htmlFor="cpf"
                        className={errors.cpf && 'text-danger'}
                    >
                        CPF
                    </FormInput.Label>
                    <FormInput.Input
                        {...register('cpf')}
                        id="cpf"
                        placeholder="000.000.000-00"
                        className={errors.cpf && 'placeholder:text-danger'}
                    />
                </FormInput.Root>
                {errors.cpf?.message && (
                    <FormInput.ErrorMessage error={errors.cpf.message} />
                )}
            </div>
            <div>
                <FormInput.Root
                    className={errors.email && 'border-2 border-danger'}
                >
                    <FormInput.Label
                        htmlFor="email"
                        className={errors.email && 'text-danger'}
                    >
                        E-mail
                    </FormInput.Label>
                    <FormInput.Input
                        {...register('email')}
                        id="email"
                        placeholder="Insira seu e-mail"
                        className={errors.email && 'placeholder:text-danger'}
                    />
                </FormInput.Root>
                {errors.email?.message && (
                    <FormInput.ErrorMessage error={errors.email.message} />
                )}
            </div>
            <div>
                <FormInput.Root
                    className={errors.password && 'border-2 border-danger'}
                >
                    <FormInput.Label
                        htmlFor="password"
                        className={errors.password && 'text-danger'}
                    >
                        Senha
                    </FormInput.Label>
                    <div className="flex w-full items-center gap-2">
                        <FormInput.Input
                            {...register('password')}
                            id="password"
                            placeholder="Insira sua senha"
                            type={showPassword ? 'text' : 'password'}
                            className={cn(
                                'w-full',
                                errors.password && 'placeholder:text-danger'
                            )}
                        />
                        <button
                            className="rounded"
                            type="button"
                            onClick={toggleShowPassword}
                        >
                            {showPassword ? (
                                <Icon.eyeSlash className="size-6 cursor-pointer" />
                            ) : (
                                <Icon.eye className="size-6 cursor-pointer" />
                            )}
                            <span className="sr-only">
                                Mostrar/esconder senha
                            </span>
                        </button>
                    </div>
                </FormInput.Root>
                {errors.password?.message && (
                    <FormInput.ErrorMessage error={errors.password.message} />
                )}
            </div>
            <div>
                <FormInput.Root
                    className={errors.checkPassword && 'border-2 border-danger'}
                >
                    <FormInput.Label
                        htmlFor="checkPassword"
                        className={errors.checkPassword && 'text-danger'}
                    >
                        Confirme sua senha
                    </FormInput.Label>
                    <div className="flex w-full items-center gap-2">
                        <FormInput.Input
                            {...register('checkPassword')}
                            id="checkPassword"
                            placeholder="Insira sua senha"
                            type={showPassword ? 'text' : 'password'}
                            className={cn(
                                'w-full',
                                errors.checkPassword &&
                                    'placeholder:text-danger'
                            )}
                        />
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
                            <span className="sr-only">
                                Mostrar/esconder senha
                            </span>
                        </button>
                    </div>
                </FormInput.Root>
                {errors.checkPassword?.message && (
                    <FormInput.ErrorMessage
                        error={errors.checkPassword.message}
                    />
                )}
            </div>
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
