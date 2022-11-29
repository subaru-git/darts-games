/* eslint-disable import/named */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/ShanghaiNights/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  history: [
    {
      result: 30,
      scores: [
        ['20T', '20D', '20'],
        ['20T', '20', '20D'],
        ['20D', '20D', '20D'],
      ],
      round: 3,
      playedAt: '2022-11-16T01:44:01.238Z',
    },
  ],
};
