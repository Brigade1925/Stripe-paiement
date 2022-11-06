import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyHeadlessDropDown, { IMyHeadlessDropDown } from './MyHeadlessDropDown';
import { mockMyHeadlessDropDownProps } from './MyHeadlessDropDown.mocks';

export default {
  title: 'dropdown/MyHeadlessDropDown',
  component: MyHeadlessDropDown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MyHeadlessDropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyHeadlessDropDown> = (args) => (
  <MyHeadlessDropDown {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMyHeadlessDropDownProps.base,
} as IMyHeadlessDropDown;
