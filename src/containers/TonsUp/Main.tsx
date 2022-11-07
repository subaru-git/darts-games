import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Description from './Description';
import NewGame from './NewGame';
import CountButtons from '@/components/CountButtons';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import NavigationBar from '@/components/NavigationBar';
import RoundBoard from '@/components/RoundBoard';
import RoundScore from '@/components/RoundScore';
import TargetBoard from '@/components/TargetBoard';
import { useTonsUpGame, useTonsUpGameSet } from '@/contexts/TonsUpGameContext';
import { db } from '@/db/db';
import { saveToDB } from '@/lib/GameHistoryManager/GameHistory';
import TonsUpGame from '@/lib/TonsUpGame/TonsUpGame';

const Main: FC = () => {
  const game = useTonsUpGame();
  const setGame = useTonsUpGameSet();
  return (
    <div data-cy='tons-up-main'>
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

const DesktopMain: FC<{ game: TonsUpGame; setGame: (game: TonsUpGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <div>
      <Flex justifyContent='space-between' alignItems='center'>
        <NewGame onNewGame={() => setGame(new TonsUpGame(20))} />
        <Description />
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
              const g = Object.assign(new TonsUpGame(20), game);
              g.removeScore();
              setGame(g);
            }}
            onRoundChange={() => {
              const g = Object.assign(new TonsUpGame(20), game);
              g.roundChange();
              setGame(g);
            }}
            isFinished={game.isFinish()}
            onRoundOver={() => {
              saveToDB(game.getGameResult(), db.tonsUpResult);
              setGame(new TonsUpGame(20));
            }}
            result={getResult(game)}
          />
        </Box>
        <Box minWidth={250}>
          <CountButtons
            buttons={[20, 19, 10, 5, 1]}
            onCount={(n) => {
              const g = Object.assign(new TonsUpGame(20), game);
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

const MobileMain: FC<{ game: TonsUpGame; setGame: (game: TonsUpGame) => void }> = ({
  game,
  setGame,
}) => {
  return (
    <Flex direction='column' gap={4}>
      <Flex justifyContent='space-between' width='100%'>
        <NewGame onNewGame={() => setGame(new TonsUpGame(20))} />
        <Flex alignItems='center' gap={4}>
          <TargetBoard
            message={`Round ${game.getRound()}`}
            target={game.getCurrentTarget().toString()}
          />
          <TargetBoard message='Score' target={game.getTotalScore().toString()} size='sm' />
        </Flex>
        <Description />
      </Flex>
      <Box px={2}>
        <RoundScore
          scores={game.getRoundScore()}
          onClear={() => {
            const g = Object.assign(new TonsUpGame(20), game);
            g.removeScore();
            setGame(g);
          }}
          onRoundChange={() => {
            const g = Object.assign(new TonsUpGame(20), game);
            g.roundChange();
            setGame(g);
          }}
          isFinished={game.isFinish()}
          onRoundOver={() => {
            saveToDB(game.getGameResult(), db.tonsUpResult);
            setGame(new TonsUpGame(20));
          }}
          result={getResult(game)}
        />
      </Box>
      <Box px={2}>
        <CountButtons
          buttons={[20, 19, 10, 5, 1]}
          onCount={(n) => {
            const g = Object.assign(new TonsUpGame(20), game);
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

const getResult = (game: TonsUpGame) => `Total: ${game.getGameResult().result}`;

export default Main;
