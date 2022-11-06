import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationBar, { INavigationBar } from './NavigationBar';
import { mockNavigationBarProps } from './NavigationBar.mocks';

export default {
  title: 'navigation/NavigationBar',
  component: NavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavigationBarProps.base,
} as INavigationBar;
