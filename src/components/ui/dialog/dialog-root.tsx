'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type DialogContextType = {
    isActive: boolean
    handleClose: () => void
    handleOpen: () => void
}

const DialogContext = createContext<DialogContextType>({} as DialogContextType)

export const useDialog = () => {
    const context = useContext(DialogContext)
    if (!context) {
        throw new Error('Componente Dialog necessita ser usado com Root.')
    }

    return context
}

export const DialogRoot = ({ children }: { children: ReactNode }) => {
    const [isActive, setIsActive] = useState(false)

    const handleClose = () => setIsActive(false)
    const handleOpen = () => setIsActive(true)

    const contextValue = {
        isActive,
        handleClose,
        handleOpen
    }

    return (
        <DialogContext.Provider value={contextValue}>
            {children}
        </DialogContext.Provider>
    )
}
