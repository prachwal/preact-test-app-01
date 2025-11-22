/**
 * Counter Signals - State Management
 *
 * @remarks
 * This module manages counter state using Preact Signals for reactive state management.
 * Counter values are automatically persisted to localStorage and restored on page load.
 * Signals provide automatic reactivity without explicit subscriptions.
 *
 * @module signals/counterSignals
 *
 * @example
 * ```tsx
 * import { count, increment, decrement, reset } from '@/signals/counterSignals';
 *
 * function Counter() {
 *   return (
 *     <div>
 *       <p>Count: {count.value}</p>
 *       <button onClick={increment}>+</button>
 *     </div>
 *   );
 * }
 * ```
 */

import { signal, computed } from '@preact/signals';

/**
 * Load count from localStorage
 */
const loadCount = (): number => {
  try {
    if (typeof window === 'undefined') return 0;
    const stored = localStorage.getItem('counter');
    if (stored) {
      const parsed = parseInt(stored, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  } catch {
    return 0;
  }
};

/**
 * Save count to localStorage
 */
const saveCount = (value: number): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('counter', value.toString());
    }
  } catch {
    // Silently fail if localStorage is not available
  }
};

/**
 * Counter value signal
 *
 * @remarks
 * Reactive counter state that automatically updates components when changed
 */
export const count = signal<number>(loadCount());

/**
 * Computed signal for count display text
 *
 * @remarks
 * Automatically recalculates when count changes
 */
export const countText = computed(() => {
  const value = count.value;
  if (value === 0) return 'Zero';
  if (value === 1) return 'One';
  if (value < 0) return `Negative ${Math.abs(value)}`;
  return `${value}`;
});

/**
 * Computed signal to check if count is even
 */
export const isEven = computed(() => count.value % 2 === 0);

/**
 * Computed signal to check if count is positive
 */
export const isPositive = computed(() => count.value > 0);

/**
 * Increment counter by specified amount
 *
 * @param amount - Amount to increment (default: 1)
 */
export const increment = (amount: number = 1): void => {
  count.value += amount;
  saveCount(count.value);
};

/**
 * Decrement counter by specified amount
 *
 * @param amount - Amount to decrement (default: 1)
 */
export const decrement = (amount: number = 1): void => {
  count.value -= amount;
  saveCount(count.value);
};

/**
 * Reset counter to initial value
 *
 * @param value - Value to reset to (default: 0)
 */
export const reset = (value: number = 0): void => {
  count.value = value;
  saveCount(count.value);
};

/**
 * Set counter to specific value
 *
 * @param value - New counter value
 */
export const setCount = (value: number): void => {
  count.value = value;
  saveCount(count.value);
};
