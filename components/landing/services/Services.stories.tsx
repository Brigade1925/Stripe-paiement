import { ComponentMeta, ComponentStory } from '@storybook/react';
import Services, { IServices } from './Services';
import { mockServicesProps } from './Services.mocks';

export default {
  title: 'landing/Services',
  component: Services,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Services>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Services> = (args) => (
  <Services {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockServicesProps.base,
} as IServices;
