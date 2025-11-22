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
const DocumentationComponent = memo(() => (
  <section>
    <h1>Documentation</h1>
    <p className="read-the-docs">
      Click on the Vite and Preact logos to learn more
    </p>
  </section>
));

(DocumentationComponent as any).displayName = 'Documentation';

export { DocumentationComponent as Documentation };
