import Link from 'next/link'

interface LinkProps {
   text: string
   href: string
}

export const LinkLogin = ({ text, href }: LinkProps) => {
   return (
      <Link className="m-4 flex gap-1 font-medium" href={href}>
         <span className="font-medium">Já possui uma conta?</span>

         <div className="text-primary">{text}</div>
      </Link>
   )
}
