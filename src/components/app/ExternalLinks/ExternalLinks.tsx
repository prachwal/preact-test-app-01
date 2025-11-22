

/**
 * External links component
 * 
 * Renders external resource links for Preact documentation and setup guide.
 * 
 * @remarks
 * This component provides navigation to external resources with proper
 * security attributes for external links.
 * 
 * @example
 * ```tsx
 * <ExternalLinks />
 * ```
 * 
 * @returns JSX element containing external links
 */
export function ExternalLinks() {
  return (
    <p>
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
  );
}