import { ComponentMeta, ComponentStory } from '@storybook/react';
import Referrals, { IReferrals } from './Referrals';
import { mockReferralsProps } from './Referrals.mocks';

export default {
  title: 'etoiliste/Referrals',
  component: Referrals,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Referrals>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Referrals> = (args) => (
  <Referrals {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockReferralsProps.base,
} as IReferrals;
