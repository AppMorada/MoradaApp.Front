import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Image
        src="/assets/images/brand/logo.svg"
        alt="Logo MoradaApp"
        width={250}
        height={250}
      />
    </>
  )
}
