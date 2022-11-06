import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stats, { IStats } from './Stats';
import { mockStatsProps } from './Stats.mocks';

export default {
  title: 'etoiliste/Stats',
  component: Stats,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Stats>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Stats> = (args) => <Stats {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStatsProps.base,
} as IStats;
