import { ComponentMeta, ComponentStory } from '@storybook/react';
import Compaign, { ICompaign } from './Compaign';
import { mockCompaignProps } from './Compaign.mocks';

export default {
  title: 'landing/Compaign',
  component: Compaign,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Compaign>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Compaign> = (args) => (
  <Compaign {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCompaignProps.base,
} as ICompaign;
