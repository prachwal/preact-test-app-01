/**
 * CounterView - Presentational Counter Component
 *
 * @remarks
 * Pure presentational component for counter display.
 * Receives data and callbacks via props (Dependency Inversion).
 *
 * @module components/content/Counter
 */

import { Button } from '@/components/ui/Button';

/**
 * CounterView props
 */
export interface CounterViewProps {
  /** Current count value */
  count: number;
  /** Formatted count text */
  countText: string;
  /** Whether count is even */
  isEven: boolean;
  /** Increment handler */
  onIncrement: () => void;
  /** Decrement handler */
  onDecrement: () => void;
  /** Reset handler */
  onReset: () => void;
}

/**
 * CounterView component - Pure presentation
 *
 * @param props - Counter view props
 * @returns Counter UI
 */
export const CounterView = ({
  count,
  countText,
  isEven,
  onIncrement,
  onDecrement,
  onReset
} : CounterViewProps) => {
    return (
      <div className="card">
        <div className="counter">
          <h2 className="counter__title">Counter: {countText}</h2>
          <div className="counter__display">
            <p className="counter__value" aria-live="polite">{count}</p>
            <p className="counter__status">{isEven ? 'Even Number' : 'Odd Number'}</p>
          </div>
          <div className="counter__controls">
            <Button variant="secondary" onClick={onDecrement}>
              Decrement -
            </Button>
            <Button variant="ghost" onClick={onReset}>
              Reset
            </Button>
            <Button variant="primary" onClick={onIncrement}>
              Increment +
            </Button>
          </div>
          <p className="counter__hint">
            Your counter value is saved locally and will persist between sessions (if browser storage is available).
          </p>
        </div>
      </div>
    );
  };

CounterView.displayName = 'CounterView';
