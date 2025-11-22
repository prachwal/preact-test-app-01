/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Test environment setup
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        '**/dist/**'
      ]
    },
    
    // JUnit reporter configuration
    reporters: ['default', 'junit'],
    outputFile: {
      junit: './test-results/junit.xml'
    },
    
    // Test file patterns
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    
    // Test timeout settings
    testTimeout: 10000,
    hookTimeout: 10000,
    
    // Environment variables
    env: {
      NODE_ENV: 'test'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});