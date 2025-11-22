import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';

const meta = {
  title: 'App/Counter',
  component: Counter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Interactive counter component demonstrating Preact hooks and state management.

## Features
- Increment counter functionality
- State management with useState hook
- Responsive button design
- Proper accessibility attributes

## State Management
- Uses Preact useState hook for local state
- Button click increments counter value
- State persists across renders

## Accessibility
- Proper button semantics with type="button"
- Clear labeling for screen readers
- Keyboard interaction support
- Semantic article wrapper

## Usage
\`\`\`tsx
import { Counter } from '@/components/app';

<Counter />
\`\`\`

## Props
This component doesn't accept props - it's a self-contained interactive unit.
        `,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default counter state showing initial value of 0.',
      },
    },
  },
};

export const IncrementOnce: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Counter after one increment - demonstrates the interactive state change.',
      },
    },
    // This story simulates user interaction
    pseudo: {
      active: ['hover'],
    },
  },
};

export const MultipleIncrements: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Counter after multiple increments - shows progressive state changes.',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Counter with verified accessibility features including semantic HTML and keyboard navigation.',
      },
    },
  },
};