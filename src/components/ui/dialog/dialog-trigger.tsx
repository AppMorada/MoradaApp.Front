'use client'

import { ReactNode } from 'react'

import { useDialog } from './dialog-root'

export const DialogTrigger = ({ children }: { children: ReactNode }) => {
    const { handleOpen } = useDialog()
    return <div onClick={handleOpen}>{children}</div>
}
