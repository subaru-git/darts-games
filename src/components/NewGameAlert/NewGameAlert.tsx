import React, { FC, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import useLocale from '@/hooks/locale'

type NewGameAlertProps = {
  isOpen: boolean
  onClose: () => void
  onNewGame: () => void
}

const NewGameAlert: FC<NewGameAlertProps> = ({ isOpen, onClose, onNewGame }) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  const { t } = useLocale()
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      blockScrollOnMount={false}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          Start New Game?
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{t.warning.newgame}</AlertDialogBody>
        <AlertDialogFooter>
          <Button onClick={onClose} ref={cancelRef} ml={3} aria-label='cancel'>
            Cancel
          </Button>
          <Button
            colorScheme='blue'
            ml={3}
            onClick={() => {
              onNewGame()
              onClose()
            }}
            aria-label='ok'
          >
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default NewGameAlert
