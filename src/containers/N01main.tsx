import React, { FC, useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CountButtons from '@/components/CountButtons'
import N01Board from '@/components/N01Board'
import NavigationBar from '@/components/NavigationBar'
import Players from '@/components/Players'
import RoundScore from '@/components/RoundScore'
import TargetBoard from '@/components/TargetBoard'
import N01Game from '@/lib/N01Game/N01Game'
import Player from '@/lib/Player/Player'

const N01main: FC = () => {
  const [game, setGame] = useState(new N01Game(501))
  return (
    <div data-cy='n01-main'>
      <NavigationBar />
      <Grid templateColumns='repeat(2, auto)' gap={10} p={4}>
        <GridItem>
          <Grid templateRows='repeat(3, auto)' gap={10}>
            <GridItem>
              <TargetBoard
                target={game.getTargetScore()?.toString()}
                message={game.getCurrentPlayer()?.getName() ?? ''}
              />
            </GridItem>
            <GridItem>
              <RoundScore
                scores={game.getRoundScore()}
                onClear={() => {
                  const g = Object.assign(new N01Game(501), game)
                  g.removeScore()
                  setGame(g)
                }}
                onRoundChange={() => {
                  const g = Object.assign(new N01Game(501), game)
                  g.roundChange()
                  g.changePlayer()
                  setGame(g)
                }}
                isFinished={false}
                onRoundOver={() => {}}
              />
            </GridItem>
            <GridItem>
              <Players
                players={game.getPlayers().map((player: Player) => player.getName())}
                onUpdateName={(names) => {
                  const g = Object.assign(new N01Game(501), game)
                  g.changePlayerName(names)
                  setGame(g)
                }}
              />
              <N01Board data={game.getScore()} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pt={4}>
          <CountButtons
            onCount={(n) => {
              const g = Object.assign(new N01Game(501), game)
              g.addScore(n)
              setGame(g)
            }}
            begin={1}
            end={20}
            reversed={true}
            disabled={game.getRoundScore().length >= 3}
          />
        </GridItem>
      </Grid>
    </div>
  )
}

export default N01main
