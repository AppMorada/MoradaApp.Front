import Image from 'next/image'

import { Button, DynamicIcon, IconName } from '@/components/ui'

import { HeroAnimation } from './components/hero-animation'

const iconStyle =
  '-mr-4 size-8 rounded-full border-2 border-neutral bg-background p-0.5 text-primary'

const icons: IconName[] = [
  'cube',
  'userGroup',
  'calendarDays',
  'megaphone',
  'clipboardDocument',
  'megaphone'
]

export default function HomePage() {
  return (
    <main className="container mx-auto px-8 pt-20">
      <section className="grid grid-cols-2 items-center justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="w-[16ch] text-[64px] font-bold leading-tight text-typography">
            A melhor maneira de gerenciar seu condomínio
          </h1>

          <div className="flex max-w-[678px] flex-col gap-2  rounded-lg border-2 bg-background-contrast p-4">
            <p className="text-base">
              Cadastre-se e aproveite todos os benefícios e serviços
              personalizados oferecidos pelo MoradaApp e aproveite para acessar
              e conhecer a nossa versão gratuita.
            </p>
            <div className="flex">
              <div className="mr-6 flex">
                {icons.map((name, index) => (
                  <DynamicIcon
                    name={name}
                    key={`${name}-${index}`}
                    className={iconStyle}
                  />
                ))}
              </div>
              <span className="text-xs">
                Além disso, você pode utilizar para gestão de encomendas,
                receber visitantes, realizar reservas e mais!
              </span>
            </div>
          </div>
          <Button className="w-36" size="lg">
            Saiba mais
          </Button>
        </div>
        <div className="relative flex w-full items-center justify-center ">
          <Image
            src="/assets/images/app-mock.png"
            alt="mock do app"
            className="z-10"
            height={700}
            width={280}
            quality={100}
          />
          <div className="invisible absolute inset-0 xl:visible">
            <HeroAnimation />
          </div>
        </div>
      </section>
    </main>
  )
}
