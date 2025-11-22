/**
 * Counter - Container Component
 *
 * @remarks
 * Container component that connects business logic (hook) to presentation (view).
 * Demonstrates Container/Presentational pattern.
 *
 * @module components/content/Counter
 *
 * @example
 * ```tsx
 * <Counter />
 * ```
 */

import { useCounter } from '@/hooks/useCounter';
import { CounterView } from './CounterView';

/**
 * Counter container component
 *
 * @returns Counter component with business logic
 */
export const Counter = () => {
  const counter = useCounter();

  return (
    <CounterView
      count={counter.count}
      countText={counter.countText}
      isEven={counter.isEven}
      onIncrement={counter.increment}
      onDecrement={counter.decrement}
      onReset={counter.reset}
    />
  );
};
