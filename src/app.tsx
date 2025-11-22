import { Header, Counter, ExternalLinks, Documentation } from './components';

/**
 * Main application component
 * 
 * This is the root component of the Preact test application. It demonstrates
 * modular component architecture with properly separated concerns.
 * 
 * @remarks
 * The App component orchestrates the layout by composing smaller, focused
 * components that each handle a specific section of the UI.
 * 
 * @example
 * ```tsx
 * import { App } from './app.tsx';
 * 
 * // The App component is used as the main entry point
 * render(<App />, document.getElementById('app')!);
 * ```
 */
export function App() {
  return (
    <main>
      <Header />
      <h1>Vite + Preact</h1>
      <Counter />
      <ExternalLinks />
      <Documentation />
    </main>
  );
}
