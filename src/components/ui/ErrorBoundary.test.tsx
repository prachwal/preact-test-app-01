/**
 * ErrorBoundary Tests
 *
 * @module components/ui/ErrorBoundary.test
 */

import { describe, it, expect, vi } from 'vitest';
import { renderWithRouter } from '@/test/preact';
import { ErrorBoundary } from './ErrorBoundary';

// Component that throws an error
const ThrowError = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    const { getByText } = renderWithRouter(
      <ErrorBoundary>
        <div>No error</div>
      </ErrorBoundary>
    );
    expect(getByText('No error')).toBeInTheDocument();
  });

  it('renders fallback when error occurs', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    const { getByText } = renderWithRouter(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(getByText('Something went wrong')).toBeInTheDocument();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error caught by boundary:', expect.any(Error), expect.any(Object));
    
    consoleErrorSpy.mockRestore();
  });

  it('renders custom fallback', () => {
    const { getByText } = renderWithRouter(
      <ErrorBoundary fallback={<div>Custom error</div>}>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(getByText('Custom error')).toBeInTheDocument();
  });

  it('has try again button', () => {
    const { getByRole } = renderWithRouter(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });

  it('try again button resets error state', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    // Create a component that throws initially but can be reset
    let shouldThrow = true;
    const ConditionalError = () => {
      if (shouldThrow) {
        throw new Error('Test error');
      }
      return <div>Recovered</div>;
    };
    
    const { getByRole, getByText, rerender } = renderWithRouter(
      <ErrorBoundary>
        <ConditionalError />
      </ErrorBoundary>
    );
    
    // Should show error initially
    expect(getByText('Something went wrong')).toBeInTheDocument();
    
    // Click try again
    const tryAgainButton = getByRole('button', { name: /try again/i });
    tryAgainButton.click();
    
    // Reset the error condition and rerender
    shouldThrow = false;
    rerender(
      <ErrorBoundary>
        <ConditionalError />
      </ErrorBoundary>
    );
    
    // Should now show recovered content
    expect(getByText('Recovered')).toBeInTheDocument();
    
    consoleErrorSpy.mockRestore();
  });
});