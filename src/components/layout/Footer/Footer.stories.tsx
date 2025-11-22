import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Footer component that displays application name, version, build information, and copyright notice.

## Features
- Semantic footer element for accessibility
- Displays app name, version, and copyright
- Responsive layout

## Usage
\`\`\`tsx
import { Footer } from '@/components/layout';

<Footer />
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default footer with full information including build details and copyright.',
      },
    },
  },
};
