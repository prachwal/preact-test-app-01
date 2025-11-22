import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  
  core: {
    disableTelemetry: true,
  },
};

export default config;