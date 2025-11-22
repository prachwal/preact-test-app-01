import type { Preview } from '@storybook/react';

// Import your global styles
import '../src/index.css';
import '../src/app.css';

const preview: Preview = {
  parameters: {
    // Layout configuration - padded dla lepszej czytelności z pełną szerokością
    layout: 'padded',
    
    // Documentation configuration
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
      toc: true,
      inlineStories: false,
      story: {
        inline: true,
        iframeHeight: 'auto',
      },
    },
    
    // Controls configuration for args
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    
    // Viewport configuration for responsive testing
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100vh',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
      defaultViewport: 'responsive',
    },
    
    // Background configuration
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--pta-color-background, #242424)',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#888888',
        },
      ],
    },
    
    // Options for better viewing experience
    options: {
      storySort: {
        order: ['Layout', 'App', '*'],
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
          color: 'var(--pta-color-text, rgba(255, 255, 255, 0.87))',
          minHeight: '100vh',
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;