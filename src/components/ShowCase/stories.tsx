import { Story, Meta } from '@storybook/react/types-6-0';
import ShowCase, { ShowCaseProps } from '.';

import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<ShowCaseProps> = args => <ShowCase {...args} />;

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutTitle: Story<ShowCaseProps> = args => (
  <ShowCase {...args} />
);

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: Story<ShowCaseProps> = args => (
  <ShowCase {...args} />
);

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames: Story<ShowCaseProps> = args => (
  <ShowCase {...args} />
);

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
