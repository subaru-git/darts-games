import React, { FC, useRef, useState, useEffect, RefObject } from 'react';
import { Box, Center } from '@chakra-ui/react';
// eslint-disable-next-line import/named
import { css, SerializedStyles } from '@emotion/react';
import { TfiTarget } from 'react-icons/tfi';
import DartBoard from '@/components/DartBoard';
import {
  actualizedCoordinate,
  getLandingPosition,
  normalizedCoordinate,
} from '@/lib/Helper/Landing';

type ArrangeBoardProps = {
  onCount: (count: point) => void;
  range: RangeAxis;
  simulation?: boolean;
  hard?: boolean;
  disabled?: boolean;
  roundVectors?: Vector2D[];
  onLanding?: (landing: Vector2D) => void;
};

type Target = {
  x: number;
  y: number;
  visible: 'visible' | 'hidden';
};
const initialTarget: Target = { x: 0.0, y: 0.0, visible: 'hidden' };

const ArrangeBoard: FC<ArrangeBoardProps> = ({
  onCount,
  range,
  simulation = false,
  hard = false,
  disabled = false,
  roundVectors = [],
  onLanding = () => {},
}) => {
  const base = useRef<HTMLDivElement>(null);
  const [aim, setAim] = useState<Target>(initialTarget);
  const [landing, setLanding] = useState<Target>(initialTarget);
  const [styles, setStyles] = useState<SerializedStyles[]>([]);
  const [animation, setAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [darts, setDarts] = useState<Target[]>([initialTarget, initialTarget, initialTarget]);
  useEffect(() => {
    const d = [initialTarget, initialTarget, initialTarget].map((v, i): Target => {
      if (!roundVectors[i]) return v;
      const visible = animation
        ? i < roundVectors.length - 1
          ? 'visible'
          : 'hidden'
        : i <= roundVectors.length - 1
        ? 'visible'
        : 'hidden';
      return { ...v, x: roundVectors[i].x, y: roundVectors[i].y, visible };
    });
    setDarts(d);
  }, [roundVectors, animation]);
  return (
    <>
      <Center>
        <Box w={'100vw'} style={{ aspectRatio: 1 }} maxW={540} maxH={540} position={'relative'}>
          <Box position={'absolute'} w={'100%'} h={'100%'}>
            <DartBoard onCount={onCount} hard={hard} />
          </Box>
          <Box
            position={'relative'}
            w={'100%'}
            h={'100%'}
            pointerEvents={'none'}
            overflow={'hidden'}
          >
            <Box
              ref={base}
              position={'absolute'}
              pointerEvents={'auto'}
              width={'100%'}
              height={'100%'}
              data-cy={'arrange-board-base'}
              onClick={(e) => {
                if (disabled) return;
                const undefinedRect = { x: 0, y: 0, width: 0, height: 0 };
                const baseRect = base.current?.getBoundingClientRect() ?? undefinedRect;
                let pos = { x: e.clientX, y: e.clientY };
                let relativePos = { x: e.clientX - baseRect.x, y: e.clientY - baseRect.y };
                const aimVec = normalizedCoordinate(relativePos, baseRect);
                setAim({ x: aimVec.x, y: aimVec.y, visible: 'visible' });
                if (simulation) {
                  pos = getLandingPosition({ x: e.clientX, y: e.clientY }, baseRect, range);
                  relativePos = { x: pos.x - baseRect.x, y: pos.y - baseRect.y };
                  const landingVec = normalizedCoordinate(relativePos, baseRect);
                  setLanding({ x: landingVec.x, y: landingVec.y, visible: 'visible' });
                }
                onLanding(normalizedCoordinate(relativePos, baseRect));
                base.current?.style.setProperty('pointer-events', `none`);
                const elm = document.elementFromPoint(pos.x, pos.y) as HTMLElement;
                base.current?.style.setProperty('pointer-events', `auto`);
                elm?.click();
                setStyles([]);
                setAnimationKey((prevKey) => prevKey + 1);
                setTimeout(() => {
                  setStyles([landingAnimationStyle]);
                }, 0);
                setAnimation(true);
              }}
            >
              <Box
                background={'blackAlpha.300'}
                width={'100%'}
                height={'100%'}
                visibility={disabled ? 'visible' : 'hidden'}
              />
              <TfiTarget
                className='text-white text-opacity-50'
                size={32}
                css={targetStyle(base, aim, 32, true)}
              />
              <TfiTarget
                key={animationKey}
                className='text-yellow-500'
                size={24}
                css={[targetStyle(base, landing, 24, simulation), dartStyle, styles]}
                onAnimationEnd={() => {
                  setAim(initialTarget);
                  setLanding(initialTarget);
                  setDarts(darts.map((d: Target) => ({ ...d, visible: 'visible' })));
                  setAnimation(false);
                  setStyles([]);
                }}
              />
              <TfiTarget
                className='text-yellow-500'
                css={[targetStyle(base, darts[0], 24, simulation), dartStyle]}
                size={24}
              />
              <TfiTarget
                className='text-yellow-500'
                css={[targetStyle(base, darts[1], 24, simulation), dartStyle]}
                size={24}
              />
              <TfiTarget
                className='text-yellow-500'
                css={[targetStyle(base, darts[2], 24, simulation), dartStyle]}
                size={24}
              />
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

const targetStyle = (
  base: RefObject<HTMLDivElement>,
  landing: Target,
  size: number,
  simulation: boolean,
) => {
  const rect = base?.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
  const vec = actualizedCoordinate(landing, rect);
  return css({
    position: 'absolute',
    left: `${vec.x - size / 2}px`,
    top: `${vec.y - size / 2}px`,
    visibility: simulation ? landing.visible : 'hidden',
  });
};
const dartStyle = css({
  filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 1))',
});

const landingAnimationStyle = css({
  animation: 'landing 1.4s ease-out',
  '@keyframes landing': {
    '0%': {
      transform: 'scale(3)',
    },
    '30%': {
      transform: 'scale(1)',
    },
  },
});

export default ArrangeBoard;
