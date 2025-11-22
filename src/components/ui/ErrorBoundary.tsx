/**
 * Error Boundary Component
 *
 * @remarks
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI with a "Try again" button.
 *
 * @module components/ui/ErrorBoundary
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */

import { Component } from 'preact/compat';
import type { ComponentChildren, ErrorInfo } from 'preact/compat';
import { ERROR_MESSAGES } from '@/constants/app';
import { memo } from 'preact/compat';
import { Button } from './Button';

export interface ErrorBoundaryProps {
  /** Child components */
  children: ComponentChildren;
  /** Fallback UI component */
  fallback?: ComponentChildren;
}

export interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean;
  /** The error that occurred */
  error?: Error;
}

/**
 * Error Boundary component
 *
 * Catches errors in the component tree and displays fallback UI
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="error-boundary">
          <h1>{ERROR_MESSAGES.GENERIC}</h1>
          <p>{ERROR_MESSAGES.TRY_AGAIN}</p>
          <Button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            type="button"
          >
            Try again
          </Button>
          {import.meta.env.DEV && this.state.error && (
            <details>
              <summary>Error details</summary>
              <pre>{this.state.error.message}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Memoized Error Boundary for performance
 */
export const MemoizedErrorBoundary = memo(ErrorBoundary);