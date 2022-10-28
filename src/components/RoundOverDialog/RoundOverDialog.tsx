import React, { FC, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react'
import { TwitterShareButton, TwitterIcon, LineShareButton, LineIcon } from 'react-share'
import { useCricketMarkUpGame } from '@/contexts/CricketMarkUpGameContext'

type RoundOverDialogProps = {
  isOpen: boolean
  onClose: () => void
  onNewGame: () => void
}

const RoundOverDialog: FC<RoundOverDialogProps> = ({ isOpen, onClose, onNewGame }) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  const game = useCricketMarkUpGame()
  if (!game) return null
  const result = `Total: ${game.getGameResult().result.count}\n${game
    .getGameResult()
    .scores.map((s) => `${s.number === 25 ? 'BULL' : s.number}: ${s.total}`)
    .join('\n')}\n`
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      size={{ base: 'xs', md: 'md' }}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Congratulations 🎉
          </AlertDialogHeader>
          <AlertDialogBody>
            <Flex direction='column' gap={3}>
              <Text whiteSpace='pre-wrap'>{result}</Text>
              <Flex justify='center' gap={2}>
                <TwitterShareButton title={result} url='http://exsample.com'>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LineShareButton title={result} url='http://exsample.com'>
                  <LineIcon size={32} round />
                </LineShareButton>
              </Flex>
            </Flex>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='gray' ml={3} onClick={onClose} ref={cancelRef}>
              Cancel
            </Button>
            <Button colorScheme='teal' ml={3} onClick={onNewGame}>
              New Game
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default RoundOverDialog
