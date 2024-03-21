'use client'

import Link from 'next/link'

import { Logo } from '@/components/ui/logo'
import { Button, DropdownMenu, Icon } from '@/components/ui'

export const Header = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-background-contrast">
      <div className="container mx-auto flex items-center justify-between px-8">
        <Logo className="block h-16 w-40" />
        <div className="flex gap-16">
          <ul className="flex items-center justify-between gap-8">
            <li>Serviços</li>
            <li>Quem Somos</li>
            <li>Funcionalidades</li>
            <li>Login</li>
          </ul>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline">
                Cadastre-se
                <Icon.chevronDown className="size-8 rounded-full bg-primary text-background" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/cadastro/condominio">Administrador</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="/cadastro/morador">Morador</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  )
}
