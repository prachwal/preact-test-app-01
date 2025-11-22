import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Read package.json for version and name
const packageJson = JSON.parse(
  readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8')
)

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Determine base URL based on environment
  const baseUrl = mode === 'production' ? '/preact-test-app-01/' : '/';
  
  console.log(`Building in ${mode} mode with base URL: ${baseUrl}`);  

  return {
    plugins: [preact()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    base: baseUrl,
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    },
    
    // CSS configuration with PostCSS
    css: {
      postcss: './postcss.config.js',
    },
    
    // Global definitions for the app
    define: {
      global: 'globalThis',
      __APP_NAME__: JSON.stringify(packageJson.name),
      __APP_VERSION__: JSON.stringify(packageJson.version),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __BASE_URL__: JSON.stringify(baseUrl),
    },
    
    // Build configuration
    build: {
      // Generate source maps for better debugging
      sourcemap: mode !== 'production',
      
      // CSS code splitting
      cssCodeSplit: true,
      
      // Optimize chunks
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['preact'],
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    
    // Server configuration for development
    server: {
      port: 3000,
      host: true,
      open: true,
    },
    
    // Preview configuration for production builds
    preview: {
      port: 3000,
      host: true,
    },
  }
})
