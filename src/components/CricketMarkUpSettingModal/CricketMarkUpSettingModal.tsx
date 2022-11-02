import React, { FC } from 'react'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import CricketMarkUpDescription from '../CricketMarkUpDescription'

type CricketMarkUpSettingModalProps = {
  isOpen: boolean
  onClose: () => void
  targetCount: number
  onNewGame: (targetCount: number) => void
}

const CricketMarkUpSettingModal: FC<CricketMarkUpSettingModalProps> = ({
  isOpen,
  onClose,
  targetCount,
  onNewGame,
}) => {
  const [innerTargetCount, setInnerTargetCount] = React.useState(targetCount)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cricket Number Count Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box py={4}>
            <CricketMarkUpDescription />
          </Box>
          <Text fontSize='sm'>Target Count</Text>
          <NumberInput
            defaultValue={innerTargetCount}
            onChange={(value) => setInnerTargetCount(parseInt(value))}
            aria-label='target count'
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' onClick={onClose} aria-label='cancel'>
            Cancel
          </Button>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => {
              onNewGame(innerTargetCount)
            }}
            aria-label='new game'
          >
            New Game
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CricketMarkUpSettingModal
