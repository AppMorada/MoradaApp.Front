import Link from 'next/link'

interface LinkProps {
  text: string
  href: string
  span: string
}

export const LinkLogin = ({ text, href, span }: LinkProps) => {
  return (
    <Link className="m-4 flex gap-1 font-medium" href={href}>
      <span className="font-medium">{span}</span>
      <div className="text-primary">{text}</div>
    </Link>
  )
}
