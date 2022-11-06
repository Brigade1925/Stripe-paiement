import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContactUs, { IContactUs } from './ContactUs';
import { mockContactUsProps } from './ContactUs.mocks';

export default {
  title: 'landing/ContactUs',
  component: ContactUs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ContactUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactUs> = (args) => (
  <ContactUs {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContactUsProps.base,
} as IContactUs;
