/**
 * Navigation Signals - Global Navigation State
 *
 * @remarks
 * Manages sidebar visibility, current route, and navigation state
 * using Preact Signals for reactive updates.
 *
 * @module signals/navigationSignals
 */

import { signal } from '@preact/signals';

/**
 * Sidebar open/closed state
 *
 * @remarks
 * Controls sidebar visibility on mobile and desktop
 */
export const sidebarOpen = signal<boolean>(false);

/**
 * Toggle sidebar visibility
 */
export const toggleSidebar = (): void => {
  sidebarOpen.value = !sidebarOpen.value;
};

/**
 * Open sidebar
 */
export const openSidebar = (): void => {
  sidebarOpen.value = true;
};

/**
 * Close sidebar
 */
export const closeSidebar = (): void => {
  sidebarOpen.value = false;
};
