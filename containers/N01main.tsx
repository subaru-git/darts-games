import React, { FC, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CountButtons from "../containers/CountButtons";
import N01Board from "../containers/N01Board";
import Players from "../containers/Players";
import N01Game from "../lib/N01Game/N01Game";
import Player from "../lib/Player/Player";
import RoundScore from "./RoundScore";
import TargetBoard from "./TargetBoard";
import NavigationBar, { NavItem } from "./NavigationBar";

const N01main: FC = () => {
  const [game, setGame] = useState(new N01Game(501));
  return (
    <>
      <NavigationBar items={items} />
      <Grid templateColumns="repeat(2, auto)" gap={10} p={4}>
        <GridItem>
          <Grid templateRows="repeat(3, auto)" gap={10}>
            <GridItem>
              <TargetBoard
                target={game.getTargetScore()?.toString()}
                message={game.getCurrentPlayer()?.getName() ?? ""}
              />
            </GridItem>
            <GridItem>
              <RoundScore
                scores={game.getRoundScore()}
                onClear={() => {
                  const g = Object.assign(new N01Game(501), game);
                  g.removeScore();
                  setGame(g);
                }}
                onRoundChange={() => {
                  const g = Object.assign(new N01Game(501), game);
                  g.roundChange();
                  g.changePlayer();
                  setGame(g);
                }}
              />
            </GridItem>
            <GridItem>
              <Players
                players={game
                  .getPlayers()
                  .map((player: Player) => player.getName())}
                onUpdateName={(names) => {
                  const g = Object.assign(new N01Game(501), game);
                  g.changePlayerName(names);
                  setGame(g);
                }}
              />
              <N01Board data={game.getScore()} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pt={4}>
          <CountButtons
            onCount={(n) => {
              const g = Object.assign(new N01Game(501), game);
              g.addScore(n);
              setGame(g);
            }}
            begin={1}
            end={20}
            reversed={true}
            disabled={game.getRoundScore().length >= 3}
          />
        </GridItem>
      </Grid>
    </>
  );
};

const items: Array<NavItem> = [
  {
    label: "Games",
    children: [
      {
        label: "501",
        subLabel: "The popular dart game",
        href: "#",
      },
      {
        label: "Eagle's Eye",
        subLabel: "A dart game for BULL practice",
        href: "/eagleseye",
      },
      {
        label: "Cricket Number Count",
        subLabel: "A original dart game for practice. designed by kikuyama.",
        href: "/cricketnumbercount",
      },
    ],
  },
  {
    label: "Respects",
    href: "#",
  },
];

export default N01main;
