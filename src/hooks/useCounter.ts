/**
 * useCounter Hook - Business Logic
 *
 * @remarks
 * Custom hook that encapsulates counter business logic and provides
 * a clean interface for components. Separates concerns following SOLID principles.
 *
 * This hook demonstrates:
 * - Single Responsibility: Only handles counter logic
 * - Dependency Inversion: Components depend on hook interface, not implementation
 * - Open/Closed: Can be extended without modifying existing code
 *
 * @module hooks/useCounter
 *
 * @example
 * ```tsx
 * const counter = useCounter();
 *
 * return (
 *   <div>
 *     <p>Count: {counter.count}</p>
 *     <button onClick={counter.increment}>+</button>
 *   </div>
 * );
 * ```
 */

import {
  count,
  countText,
  isEven,
  isPositive,
  increment as incrementSignal,
  decrement as decrementSignal,
  reset as resetSignal,
} from '@/signals/counterSignals';

/**
 * Counter hook return type
 *
 * @interface
 */
export interface UseCounterReturn {
  /** Current count value (reactive) */
  count: number;
  /** Formatted count text */
  countText: string;
  /** Whether count is even */
  isEven: boolean;
  /** Whether count is positive */
  isPositive: boolean;
  /** Increment counter function */
  increment: () => void;
  /** Decrement counter function */
  decrement: () => void;
  /** Reset counter function */
  reset: () => void;
  /** Increment by 5 function */
  incrementBy5: () => void;
  /** Decrement by 5 function */
  decrementBy5: () => void;
}

/**
 * Counter custom hook
 *
 * @remarks
 * Provides counter functionality with callbacks for optimal performance.
 * Uses Preact Signals for reactive state management.
 *
 * @returns Counter interface with state and actions
 */
export const useCounter = (): UseCounterReturn => {
  // Callbacks for counter actions
  const handleIncrement = () => {
    incrementSignal();
  };

  const handleDecrement = () => {
    decrementSignal();
  };

  const handleReset = () => {
    resetSignal();
  };

  const handleIncrementBy5 = () => {
    incrementSignal(5);
  };

  const handleDecrementBy5 = () => {
    decrementSignal(5);
  };

  return {
    count: count.value,
    countText: countText.value,
    isEven: isEven.value,
    isPositive: isPositive.value,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
    incrementBy5: handleIncrementBy5,
    decrementBy5: handleDecrementBy5,
  };
};
