import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

/**
 * Main application component
 * 
 * This is the root component of the Preact test application. It demonstrates
 * basic Preact functionality including state management with hooks and JSX rendering.
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
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">Click on the Vite and Preact logos to learn more</p>
    </div>
  );
}
