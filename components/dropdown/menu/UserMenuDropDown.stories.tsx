import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserMenuDropDown, { IUserMenuDropDown } from './UserMenuDropDown';
import { mockUserMenuDropDownProps } from './UserMenuDropDown.mocks';

export default {
  title: 'dropdown/UserMenuDropDown',
  component: UserMenuDropDown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserMenuDropDown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserMenuDropDown> = (args) => (
  <UserMenuDropDown {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockUserMenuDropDownProps.base,
} as IUserMenuDropDown;
