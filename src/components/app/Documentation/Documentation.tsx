import { memo } from 'preact/compat';

/**
 * Documentation component
 *
 * Displays call-to-action for learning resources.
 *
 * @example
 * ```tsx
 * <Documentation />
 * ```
 */
export const Documentation = memo(() => (
  <section>
    <h1>Documentation</h1>
    <p className="read-the-docs">
      Click on the Vite and Preact logos to learn more
    </p>
  </section>
));

Documentation.displayName = 'Documentation';
