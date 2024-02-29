import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/ui/icon'

import { FormRegisterResident } from '../components/form-resident'

export default function ResidentRegisterPage() {
    return (
        <section className="relative mx-auto flex h-dvh max-w-[1440px] flex-col items-center justify-center">
            <Link
                className="absolute left-10 top-10 flex items-center justify-center gap-2 rounded-full border-2 p-3 font-bold text-typography"
                href="/"
            >
                <Icon.chevronLeft className="size-8 rounded-full bg-primary p-1.5 text-background" />
                Voltar
            </Link>
            <Image
                src="/assets/images/brand/logo.svg"
                alt="Logo"
                width={200}
                height={60}
                className="mb-16"
            />

            <FormRegisterResident />

            <footer className="mt-2 font-medium">
                Já possui uma conta?{' '}
                <Link href="/login" className="text-primary">
                    Faça login
                </Link>
            </footer>
        </section>
    )
}
