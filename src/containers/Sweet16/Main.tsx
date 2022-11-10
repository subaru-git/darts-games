import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Description from './Description';
import NewGame from './NewGame';
import CameraView from '@/components/CameraView';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useSweet16Game, useSweet16GameSet } from '@/contexts/Sweet16Context';
import { db } from '@/db/db';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import Sweet16Game from '@/lib/Sweet16Game/Sweet16Game';

const Main: FC = () => {
  const game = useSweet16Game();
  const setGame = useSweet16GameSet();
  return (
    <div data-cy='sweet16-main'>
      <NavigationBar />
      {!game ? (
        <Loading />
      ) : (
        <>
          <Box display={{ base: 'none', md: 'block' }}>
            <DesktopMain game={game} setGame={setGame} />
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <MobileMain game={game} setGame={setGame} />
          </Box>
        </>
      )}
      <Footer />
    </div>
  );
};

const DesktopMain: FC<{ game: Sweet16Game; setGame: (game: Sweet16Game) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new Sweet16Game(20))} />
        <Flex gap={2}>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Flex justifyContent='space-around' gap={4} alignItems='center' p={4}>
        <Box>
          <Flex justifyContent='center' alignItems='end'>
            <TargetBoard
              message={`Round ${game.getRound()}`}
              target={game.getCurrentTarget().toString()}
            />
            <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
          </Flex>
          <RoundScore
            scores={game.getRoundScore()}
            onClear={() => {
              const g = Object.assign(new Sweet16Game(20), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new Sweet16Game(20), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.sweet16Result);
              setGame(new Sweet16Game(20));
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[16, 8, 4, 2, 1]}
            onCount={(n) => {
              const g = Object.assign(new Sweet16Game(20), game);
              g.addScore(n);
              setGame(g);
            }}
            bull={false}
            full
          />
        </Box>
      </Flex>
      <Box p={4}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </div>
  );
};

const MobileMain: FC<{ game: Sweet16Game; setGame: (game: Sweet16Game) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame onNewGame={() => setGame(new Sweet16Game(20))} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard message='Target' target={game.getCurrentTarget().toString()} />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Flex direction='column'>
          <Description />
          <CameraView />
        </Flex>
      </Flex>
      <Box px={2}>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new Sweet16Game(20), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new Sweet16Game(20), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.sweet16Result);
            setGame(new Sweet16Game(20));
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[16, 8, 4, 2, 1]}
          onCount={(n) => {
            const g = Object.assign(new Sweet16Game(20), game);
            g.addScore(n);
            setGame(g);
          }}
          bull={false}
          full
        />
      </Box>
      <Box px={2}>
        <RoundBoard score={game.getScore()} />
      </Box>
    </Flex>
  );
};

const getResult = (game: Sweet16Game) => `Total: ${game.getGameResult().result}`;

export default Main;
