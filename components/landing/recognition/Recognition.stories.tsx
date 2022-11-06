import { ComponentMeta, ComponentStory } from '@storybook/react';
import Recognition, { IRecognition } from './Recognition';
import { mockRecognitionProps } from './Recognition.mocks';

export default {
  title: 'landing/Recognition',
  component: Recognition,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Recognition>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Recognition> = (args) => (
  <Recognition {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRecognitionProps.base,
} as IRecognition;
