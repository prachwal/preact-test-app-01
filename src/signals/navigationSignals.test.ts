/**
 * Navigation Signals Tests
 *
 * @module signals/navigationSignals.test
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { sidebarOpen, toggleSidebar, openSidebar, closeSidebar } from './navigationSignals';

describe('Navigation Signals', () => {
  beforeEach(() => {
    // Reset to initial state
    closeSidebar();
  });

  describe('sidebarOpen signal', () => {
    it('should initialize to false', () => {
      expect(sidebarOpen.value).toBe(false);
    });

    it('should toggle correctly', () => {
      toggleSidebar();
      expect(sidebarOpen.value).toBe(true);
      toggleSidebar();
      expect(sidebarOpen.value).toBe(false);
    });

    it('should open correctly', () => {
      openSidebar();
      expect(sidebarOpen.value).toBe(true);
    });

    it('should close correctly', () => {
      openSidebar();
      expect(sidebarOpen.value).toBe(true);
      closeSidebar();
      expect(sidebarOpen.value).toBe(false);
    });
  });
});