import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HistoryTable from './HistoryTable';

export default {
  title: 'Containers/CountUp/HistoryTable',
  component: HistoryTable,
} as ComponentMeta<typeof HistoryTable>;

const Template: ComponentStory<typeof HistoryTable> = (args) => <HistoryTable {...args} />;

export const Default = Template.bind({});
Default.args = {};
