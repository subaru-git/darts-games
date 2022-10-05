import React from 'react'
import CountBullButtons from '../components/CountBullButtons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/CountBullButtons',
  component: CountBullButtons,
} as ComponentMeta<typeof CountBullButtons>

const Template: ComponentStory<typeof CountBullButtons> = (args) => <CountBullButtons {...args} />

export const Default = Template.bind({})
Default.args = {}
