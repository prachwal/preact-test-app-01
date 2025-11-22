import type { Preview } from '@storybook/react';

// Import your global styles
import '../src/index.css';
import '../src/app.css';

const preview: Preview = {
  parameters: {
    // Layout configuration
    layout: 'centered',
    
    // Documentation configuration
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
      toc: true,
    },
    
    // Controls configuration for args
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  
  // Global decorators for components that need providers
  decorators: [
    (Story) => (
      <div 
        id="app" 
        style={{
          backgroundColor: 'var(--pta-color-background, #242424)',
          color: 'var(--pta-color-text, rgba(255, 255, 255, 0.87))'
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;