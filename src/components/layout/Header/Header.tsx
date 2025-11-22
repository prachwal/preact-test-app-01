import viteLogo from '/vite.svg';
import preactLogo from '/preact.svg';

/**
 * Header component with logos
 * 
 * Renders the application header containing Vite and Preact logos with links.
 * 
 * @remarks
 * This component demonstrates proper Preact usage with JSX pragma and Fragment.
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header() {
  return (
    <header>
      <a 
        href="https://vite.dev" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a 
        href="https://preactjs.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src={preactLogo} class="logo preact" alt="Preact logo" />
      </a>
    </header>
  );
}