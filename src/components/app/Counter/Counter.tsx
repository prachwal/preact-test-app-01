import { useState } from 'preact/hooks';

/**
 * Counter component with interactive button
 * 
 * Provides an interactive counter with increment functionality.
 * Demonstrates Preact hooks usage for state management.
 * 
 * @remarks
 * This component uses useState hook for local state management
 * and demonstrates proper event handling in Preact.
 * 
 * @example
 * ```tsx
 * <Counter />
 * ```
 * 
 * @returns JSX element containing counter controls
 */
export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(previousCount => previousCount + 1);
  };

  return (
    <article class="card">
      <button onClick={handleIncrement}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app.tsx</code> and save to test HMR
      </p>
    </article>
  );
}