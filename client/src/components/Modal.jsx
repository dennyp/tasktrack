import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import React from 'react'

const Modal = ({ children, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div>
        <DialogPanel className="grid w-full h-full bg-background p-6 text-left fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Modal
