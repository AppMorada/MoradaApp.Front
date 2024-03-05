import Image from 'next/image'

import { cn } from '@/lib/utils/styles'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('relative h-[98px] w-[268px]', className)}>
      <Image
        className="object-contain"
        src="/assets/images/brand/logo.svg"
        alt="Logo MoradaApp"
        fill
      />
    </div>
  )
}
