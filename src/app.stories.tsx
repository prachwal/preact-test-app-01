import type { Meta, StoryObj } from '@storybook/react';
import { App } from './app';

const meta = {
  title: 'Pages/App',
  component: App,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Main application component for the Preact test app.',
      },
    },
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDocumentation: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is the default state of the main application component.',
      },
    },
  },
};