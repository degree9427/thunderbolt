import { forwardRef, useImperativeHandle, useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog' // adjust import to your project
import { Button } from './ui/button'

export type DestructiveDialogRef = {
  open: () => void
  close: () => void
}

type DestructiveDialogProps = {
  confirmText: string
  description: string
  onCancel?: () => void
  onConfirm: () => void
  title: string
}

export const DestructiveDialog = forwardRef<DestructiveDialogRef, DestructiveDialogProps>(
  ({ confirmText, description, onCancel, onConfirm, title }, ref) => {
    const [open, setOpen] = useState(false)

    const handleCancel = () => {
      setOpen(false)
      onCancel?.()
    }

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }))

    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <Button variant="destructive" onClick={onConfirm}>
              {confirmText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
)

DestructiveDialog.displayName = 'DestructiveDialog'
