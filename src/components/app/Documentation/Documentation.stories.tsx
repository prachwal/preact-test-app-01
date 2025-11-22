import type { Meta, StoryObj } from '@storybook/react';
import { Documentation } from './Documentation';

const meta = {
  title: 'App/Documentation',
  component: Documentation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Documentation component providing learning resources guidance and call-to-action.

## Features
- Informational text about available learning resources
- Clear call-to-action for exploring documentation
- Consistent typography with application design
- Accessibility-compliant text structure

## Content
- Provides guidance for developers to explore project documentation
- References Vite and Preact logos as learning entry points
- Encourages further exploration of project resources

## Accessibility
- Proper paragraph semantics
- Clear, descriptive text for screen readers
- Keyboard navigation support
- Consistent text styling

## Usage
\`\`\`tsx
import { Documentation } from '@/components/app';

<Documentation />
\`\`\`

This component doesn't accept props - it's static informational content.
        `,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Documentation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default documentation component showing guidance text for learning resources.',
      },
    },
  },
};

export const WithLearningFocus: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Documentation component emphasizing the learning and exploration aspects of the project.',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Documentation component with verified accessibility features and proper semantic structure.',
      },
    },
  },
};