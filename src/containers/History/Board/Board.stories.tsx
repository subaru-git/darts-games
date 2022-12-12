/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import Board from './Board';

export default {
  title: 'Containers/History/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: {
    cricketMarkUp: [
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 0,
        scores: [
          {
            number: 20,
            count: 0,
            total: 0,
          },
          {
            number: 19,
            count: 0,
            total: 0,
          },
          {
            number: 18,
            count: 0,
            total: 0,
          },
          {
            number: 17,
            count: 0,
            total: 0,
          },
          {
            number: 16,
            count: 0,
            total: 0,
          },
          {
            number: 15,
            count: 0,
            total: 0,
          },
          {
            number: 25,
            count: 0,
            total: 0,
          },
        ],
        playedAt: '2022-11-15T02:47:09.017Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 3,
        scores: [
          {
            number: 20,
            count: 3,
            total: 2,
          },
          {
            number: 19,
            count: 0,
            total: 1,
          },
          {
            number: 18,
            count: 0,
            total: 0,
          },
          {
            number: 17,
            count: 0,
            total: 0,
          },
          {
            number: 16,
            count: 0,
            total: 0,
          },
          {
            number: 15,
            count: 0,
            total: 0,
          },
          {
            number: 25,
            count: 0,
            total: 0,
          },
        ],
        playedAt: '2022-11-15T02:47:19.233Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 8,
        scores: [
          {
            number: 20,
            count: 3,
            total: 1,
          },
          {
            number: 19,
            count: 3,
            total: 1,
          },
          {
            number: 18,
            count: 3,
            total: 1,
          },
          {
            number: 17,
            count: 3,
            total: 1,
          },
          {
            number: 16,
            count: 3,
            total: 1,
          },
          {
            number: 15,
            count: 3,
            total: 1,
          },
          {
            number: 25,
            count: 3,
            total: 2,
          },
        ],
        playedAt: '2022-11-15T02:47:38.224Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 0,
        scores: [
          {
            number: 20,
            count: 0,
            total: 0,
          },
          {
            number: 19,
            count: 0,
            total: 0,
          },
          {
            number: 18,
            count: 0,
            total: 0,
          },
          {
            number: 17,
            count: 0,
            total: 0,
          },
          {
            number: 16,
            count: 0,
            total: 0,
          },
          {
            number: 15,
            count: 0,
            total: 0,
          },
          {
            number: 25,
            count: 0,
            total: 0,
          },
        ],
        playedAt: '2022-11-15T02:48:31.119Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 6,
        result: 2,
        scores: [
          {
            number: 20,
            count: 6,
            total: 2,
          },
          {
            number: 19,
            count: 0,
            total: 0,
          },
          {
            number: 18,
            count: 0,
            total: 0,
          },
          {
            number: 17,
            count: 0,
            total: 0,
          },
          {
            number: 16,
            count: 0,
            total: 0,
          },
          {
            number: 15,
            count: 0,
            total: 0,
          },
          {
            number: 25,
            count: 0,
            total: 0,
          },
        ],
        playedAt: '2022-11-15T02:48:58.126Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 8,
        scores: [
          {
            number: 20,
            count: 3,
            total: 1,
          },
          {
            number: 19,
            count: 3,
            total: 1,
          },
          {
            number: 18,
            count: 3,
            total: 1,
          },
          {
            number: 17,
            count: 3,
            total: 1,
          },
          {
            number: 16,
            count: 3,
            total: 1,
          },
          {
            number: 15,
            count: 3,
            total: 1,
          },
          {
            number: 25,
            count: 3,
            total: 2,
          },
        ],
        playedAt: '2022-11-15T07:22:32.709Z',
      },
      {
        uuid: uuidv4(),
        targetCount: 3,
        result: 8,
        scores: [
          {
            number: 20,
            count: 3,
            total: 1,
          },
          {
            number: 19,
            count: 3,
            total: 1,
          },
          {
            number: 18,
            count: 3,
            total: 1,
          },
          {
            number: 17,
            count: 3,
            total: 1,
          },
          {
            number: 16,
            count: 3,
            total: 1,
          },
          {
            number: 15,
            count: 3,
            total: 1,
          },
          {
            number: 25,
            count: 3,
            total: 2,
          },
        ],
        playedAt: '2022-11-28T23:40:41.221Z',
      },
    ],
    eaglesEye: [
      {
        uuid: uuidv4(),
        result: 1050,
        scores: [
          ['D-BULL', 'S-BULL', '0'],
          ['0', 'S-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
          ['D-BULL', 'D-BULL', 'D-BULL'],
        ],
        playedAt: '2022-11-16T05:53:48.708Z',
      },
    ],
    doubleTrouble: [
      {
        uuid: uuidv4(),
        result: 300,
        scores: [
          ['1D', '1D', '1D'],
          ['2D', '2D', '2D'],
          ['3D', '3D', '3D'],
          ['4D', '4D', '4D'],
          ['5D', '5D', '5D'],
          ['6D', '6D', '6D'],
          ['7D', '7D', '7D'],
          ['8D', '8D', '8D'],
          ['9D', '9D', '9D'],
          ['10D', '10D', '10D'],
          ['11D', '11D', '11D'],
          ['12D', '12D', '12D'],
          ['13D', '13D', '13D'],
          ['14D', '14D', '14D'],
          ['15D', '15D', '15D'],
          ['16D', '16D', '16D'],
          ['17D', '17D', '17D'],
          ['18D', '18D', '18D'],
          ['19D', '19D', '19D'],
          ['20D', '20D', '20D'],
        ],
        playedAt: '2022-11-16T00:35:51.278Z',
      },
    ],
    sweet16: [
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
        ],
        playedAt: '2022-11-16T00:52:51.863Z',
        round: 0,
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:47:02.739Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
          ['16D', '16D', '16D'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:47:47.878Z',
      },
    ],
    topsAndTens: [
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
        ],
        playedAt: '2022-11-16T01:09:24.712Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
        ],
        playedAt: '2022-11-16T01:10:39.989Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
        ],
        playedAt: '2022-11-16T01:45:29.863Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
        ],
        playedAt: '2022-11-16T01:46:26.878Z',
      },
    ],
    twoDartCombinations: [
      {
        uuid: uuidv4(),
        result: 270,
        scores: [
          ['17D', '17D', '17D'],
          ['16D', '16D', '16D'],
          ['3', '20D', '0'],
          ['4', '20D', '0'],
          ['13', '16D', '0'],
          ['6', '20D', '0'],
          ['7', '20D', '0'],
          ['16', '16D', '0'],
          ['9', '20D', '0'],
          ['18', '16D', '0'],
          ['11', '20D', '0'],
          ['12', '20D', '0'],
          ['13', '20D', '0'],
          ['14', '20D', '0'],
          ['15', '20D', '0'],
          ['16', '20D', '0'],
          ['17', '20D', '0'],
          ['18', '20D', '0'],
          ['19', '20D', '0'],
          ['20', '20D', '0'],
        ],
        playedAt: '2022-11-16T01:25:36.150Z',
      },
    ],
    aroundTheCompass: [
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:42:27.811Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:44:01.238Z',
      },
      {
        uuid: uuidv4(),
        result: 45,
        scores: [
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
          ['12D', '12D', '12D'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:45:00.538Z',
      },
    ],
    tonsUp: [
      {
        uuid: uuidv4(),
        result: 60,
        scores: [
          ['20T', '20D', '0'],
          ['20T', '20D', '0'],
          ['20T', '20D', '0'],
        ],
        round: 3,
        playedAt: '2022-11-16T02:00:00.424Z',
      },
    ],
    route64: [
      {
        uuid: uuidv4(),
        result: 0,
        scores: [
          ['20D', '20D', '20D'],
          ['16', '16', '16'],
          ['20', '20', '20'],
        ],
        round: 3,
        playedAt: '2022-11-16T02:22:00.150Z',
      },
    ],
    eightyThrew: [
      {
        uuid: uuidv4(),
        result: 40,
        scores: [
          ['20T', '11D', '0'],
          ['D-BULL', '16D', '0'],
          ['20D', '20D', '20D'],
        ],
        round: 3,
        playedAt: '2022-11-16T02:36:42.051Z',
      },
    ],
    shanghaiNights: [
      {
        uuid: uuidv4(),
        result: 30,
        scores: [
          ['20T', '20D', '20'],
          ['20T', '20', '20D'],
          ['20D', '20D', '20D'],
        ],
        round: 3,
        playedAt: '2022-11-16T02:51:53.119Z',
      },
    ],
    switchHitter: [
      {
        uuid: uuidv4(),
        result: 18,
        scores: [
          ['19D', '19D', '19'],
          ['19', '19', '19D'],
          ['19D', '19D', '19D'],
        ],
        round: 3,
        playedAt: '2022-11-16T05:17:32.351Z',
      },
    ],
    bullyBully: [
      {
        uuid: uuidv4(),
        result: 21,
        scores: [
          ['D-BULL', 'S-BULL', '0'],
          ['D-BULL', 'S-BULL', '0'],
          ['D-BULL', 'S-BULL', '0'],
        ],
        round: 3,
        playedAt: '2022-11-29T06:11:20.639Z',
      },
    ],
    treblesForShow: [
      {
        uuid: uuidv4(),
        result: 18,
        scores: [
          ['20D', '20D', '20D'],
          ['20D', '20D', '20D'],
          ['20', '20', '20'],
        ],
        round: 3,
        playedAt: '2022-11-16T05:32:19.825Z',
      },
    ],
  },
};
