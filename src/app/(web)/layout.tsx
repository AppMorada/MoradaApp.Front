import { ReactNode } from 'react'

import { Header } from './components/header'

type LayoutHomepageProps = {
  children: ReactNode
}

export default function LayoutHomepage({ children }: LayoutHomepageProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
