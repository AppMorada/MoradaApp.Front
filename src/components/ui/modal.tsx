import { XMarkIcon } from '@heroicons/react/16/solid'

import { Button } from './button'
import { Logo } from './logo'

interface ModalProps {
  onClose: () => void
  paragraph: string
  title: string
}

export const Modal = ({ onClose, paragraph, title }: ModalProps) => {
  return (
    <div className="fixed left-0 top-0 z-10 my-auto flex h-full w-full items-center justify-center bg-black bg-opacity-70 p-8">
      <div className="max-w-screen relative flex max-h-screen flex-col items-center justify-center gap-16 rounded-lg bg-white">
        <button
          className="absolute right-3 top-3"
          type="button"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6 text-gray-500" />
        </button>

        <Logo className="-mb-12 mt-6 sm:-mb-8 sm:mt-10" />

        <div className="flex w-full flex-col gap-8 rounded-b-xl bg-violet-200 p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm">{paragraph}</p>
          </div>
          <Button className="max-w-[178px]" onClick={onClose}>
            Verificar e-mail
          </Button>
        </div>
      </div>
    </div>
  )
}
