'use client'

import { ReactNode, useEffect } from 'react'

import { Icon } from '../icon'
import { useDialog } from './dialog-root'

type DialogContentProps = {
  children: ReactNode
}

export const DialogContent = ({ children }: DialogContentProps) => {
  const { isActive, handleClose } = useDialog()

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()

        handleClose()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [handleClose])

  return (
    <>
      {isActive ? (
        <div className="fixed inset-0 z-20 flex min-h-screen items-center justify-center bg-black/30 bg-red-500">
          <div className="relative rounded-lg border border-border bg-background">
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 size-6 transition-all hover:text-primary"
            >
              <Icon.X />
            </button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}
