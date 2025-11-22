import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Header component provides navigation branding with Vite and Preact logos.

## Features
- Semantic header element for accessibility
- External links with security attributes
- Responsive logo layout
- Proper focus management

## Accessibility
- Uses semantic <header> element
- Links have proper ARIA labels via alt text
- Security attributes (noopener, noreferrer) for external links
- Keyboard navigation support

## Usage
\`\`\`tsx
import { Header } from '@/components/layout';

<Header />
\`\`\`
        `,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default header with Vite and Preact logos in horizontal layout.',
      },
    },
  },
};

export const WithCustomTheme: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header component adapts to light and dark themes automatically.',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header with verified accessibility features including semantic HTML and proper link attributes.',
      },
    },
  },
};