import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import HistoryTable from './HistoryTable';

const meta: Meta<typeof HistoryTable> = {
  component: HistoryTable,
  title: 'Containers/EightyThrew/HistoryTable',
};

export default meta;
type Story = StoryObj<typeof HistoryTable>;
export const Default: Story = {
  args: {
    history: [
      {
        uuid: uuidv4(),
        result: 40,
        scores: [
          ['T20', 'D11', '0'],
          ['D-BULL', 'D16', '0'],
          ['D20', 'D20', 'D20'],
        ],
        round: 3,
        playedAt: '2022-11-16T01:44:01.238Z',
      },
    ],
  },
};
