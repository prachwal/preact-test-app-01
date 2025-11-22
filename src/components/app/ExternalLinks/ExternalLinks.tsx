import { memo } from 'preact/compat';

/**
 * External links component
 *
 * Displays link to Preact + Vite starter guide.
 * Optimized with memo for performance.
 *
 * @example
 * ```tsx
 * <ExternalLinks />
 * ```
 */
export const ExternalLinks = memo(() => (
  <section>
    <h1>External Links</h1>
    <p className="external-links">
      Check out{' '}
      <a
        href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-preact
      </a>
      , the official Preact + Vite starter
    </p>
  </section>
));

ExternalLinks.displayName = 'ExternalLinks';
