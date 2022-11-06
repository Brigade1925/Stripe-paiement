import { ComponentMeta, ComponentStory } from '@storybook/react';
import Donation, { IDonation } from './Donation';
import { mockDonationProps } from './Donation.mocks';

export default {
  title: 'landing/Donation',
  component: Donation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Donation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Donation> = (args) => (
  <Donation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDonationProps.base,
} as IDonation;
