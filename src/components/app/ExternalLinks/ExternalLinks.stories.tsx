import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLinks } from './ExternalLinks';

const meta = {
  title: 'App/ExternalLinks',
  component: ExternalLinks,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
External links component providing navigation to Preact documentation and setup resources.

## Features
- External link to official Preact + Vite starter guide
- Security attributes for safe external navigation
- Accessible text structure with proper ARIA support
- Consistent typography with application theme

## Security
- Uses \`rel="noopener noreferrer"\` for external links
- Links open in new tabs (\`target="_blank"\`)
- Prevents potential security vulnerabilities

## Accessibility
- Proper link semantics with descriptive text
- Maintains text flow for screen readers
- Keyboard navigation support
- Clear indication of external links

## Usage
\`\`\`tsx
import { ExternalLinks } from '@/components/app';

<ExternalLinks />
\`\`\`

This component doesn't accept props - it's a static informational component.
        `,
      },
    },
  },
  args: {},
} satisfies Meta<typeof ExternalLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default external links component showing official Preact + Vite starter documentation link.',
      },
    },
  },
};

export const WithSecurityFocus: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'External links component emphasizing security features including noopener and noreferrer attributes.',
      },
    },
  },
};

export const Accessibility: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'External links component with verified accessibility features for screen readers and keyboard navigation.',
      },
    },
  },
};