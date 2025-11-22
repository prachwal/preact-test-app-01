import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      // Preact 10 has built-in React compatibility, no aliases needed
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  
  // Storybook specific configuration
  define: {
    global: 'globalThis',
  },
})
