/* eslint-disable import/named */
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HistoryDeleteAlert from './HistoryDeleteAlert'

export default {
  title: 'Components/HistoryDeleteAlert',
  component: HistoryDeleteAlert,
} as ComponentMeta<typeof HistoryDeleteAlert>

const Template: ComponentStory<typeof HistoryDeleteAlert> = (args) => (
  <HistoryDeleteAlert {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  history: {
    id: 1,
    game: 'CricketNumberCount',
    result: { count: 100 },
    setting: { targetCount: 10 },
    scores: [],
    playedAt: '2021-01-01T00:00:00.000Z',
  },
}
