import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroVideo, { IHeroVideo } from './HeroVideo';
import { mockHeroVideoProps } from './HeroVideo.mocks';

export default {
  title: 'landing/HeroVideo',
  component: HeroVideo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroVideo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroVideo> = (args) => (
  <HeroVideo {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroVideoProps.base,
} as IHeroVideo;
