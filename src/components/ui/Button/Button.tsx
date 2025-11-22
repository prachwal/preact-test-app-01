/**
 * Button Component - Reusable UI Button
 *
 * @remarks
 * Universal button component with variants, sizes, and states.
 * Follows SOLID principles - single responsibility (presentation only).
 *
 * @module components/ui/Button
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 */

import { memo } from 'preact/compat';
import type { ComponentChildren } from 'preact';

/**
 * Button component props
 */
export interface ButtonProps {
  /** Button content */
  children: ComponentChildren;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS class */
  className?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * Button component
 *
 * @param props - Button props
 * @returns Button element
 */
export const Button = memo<ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    className = '',
    ariaLabel,
  }) => {
    const classes = [
      'button',
      `button--${variant}`,
      `button--${size}`,
      loading && 'button--loading',
      disabled && 'button--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        {...(loading && { 'aria-busy': true })}
      >
        {loading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
