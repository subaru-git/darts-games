import React, { FC } from 'react';
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { GiPartyPopper } from 'react-icons/gi';
import { MdOutlineChangeCircle } from 'react-icons/md';
import RoundOverDialog from '../RoundOverDialog';
import Button from '@/atoms/Button';

type RoundScoreButtonProps = {
  isFinished: boolean;
  disabled: boolean;
  result: string;
  onRoundChange: () => void;
  onRoundOver: () => void;
};

const RoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const isMd = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {!isMd ? (
        <MobileRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
        />
      ) : (
        <DesktopRoundScoreButton
          isFinished={isFinished}
          disabled={disabled}
          onRoundChange={onRoundChange}
          onRoundOver={onRoundOver}
          result={result}
        />
      )}
    </>
  );
};

const DesktopRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isFinished ? (
        <Button
          color={'green-fill'}
          onClick={() => onRoundChange()}
          disabled={disabled}
          aria-label={'round change'}
        >
          <div className='flex items-center gap-1'>
            <MdOutlineChangeCircle />
            <span>Change</span>
          </div>
        </Button>
      ) : (
        <>
          <Button color={'orange-fill'} onClick={() => onOpen()} aria-label={'round over'}>
            <div className='flex items-center gap-1'>
              <GiPartyPopper />
              <span>Over</span>
            </div>
          </Button>
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver();
              onClose();
            }}
            result={result}
          />
        </>
      )}
    </>
  );
};

const MobileRoundScoreButton: FC<RoundScoreButtonProps> = ({
  isFinished,
  disabled,
  result,
  onRoundChange,
  onRoundOver,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!isFinished ? (
        <Button
          color={'green-fill'}
          onClick={() => onRoundChange()}
          disabled={disabled}
          aria-label={'round change'}
        >
          <MdOutlineChangeCircle />
        </Button>
      ) : (
        <>
          <Button color={'orange-fill'} onClick={() => onOpen()} aria-label='round over'>
            <GiPartyPopper />
          </Button>
          <RoundOverDialog
            isOpen={isOpen}
            onClose={onClose}
            onNewGame={() => {
              onRoundOver();
              onClose();
            }}
            result={result}
          />
        </>
      )}
    </>
  );
};

export default RoundScoreButton;
