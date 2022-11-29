/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/Sweet16/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      result: 45,
      scores: [
        ['16D', '16D', '16D'],
        ['16D', '16D', '16D'],
        ['16D', '16D', '16D'],
      ],
      round: 3,
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
