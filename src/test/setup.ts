import { expect, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/preact';
import * as matchers from '@testing-library/jest-dom/matchers';

// Add jest-dom matchers
expect.extend(matchers);

// Global test setup
beforeAll(() => {
  // Set up test environment
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock localStorage
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
  Object.defineProperty(window, 'localStorage', {
    writable: true,
    value: localStorageMock,
  });
});

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Global type declarations for testing library matchers
declare module 'vitest' {
  interface JestAssertion<T = any> extends matchers.TestingLibraryMatchers<T, void> {}
}
