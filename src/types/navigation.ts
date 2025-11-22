/**
 * Navigation type definitions
 *
 * @module types/navigation
 */

import type { ComponentType } from 'preact';

/**
 * Navigation item configuration
 */
export interface NavigationItem {
  /** Route path */
  path: string;
  /** Display label */
  label: string;
  /** Icon identifier */
  icon?: string;
  /** Component to render */
  component?: ComponentType;
}

/**
 * Navigation section grouping
 */
export interface NavigationSection {
  /** Section title */
  title?: string;
  /** Items in this section */
  items: NavigationItem[];
}
