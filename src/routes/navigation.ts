/**
 * Navigation configuration
 *
 * @remarks
 * Defines navigation structure for sidebar and routing
 *
 * @module routes/navigation
 */

import type { NavigationItem } from '@/types/navigation';

/**
 * Main navigation items
 */
export const navigationItems: NavigationItem[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: '🏠',
  },
  {
    path: '/counter',
    label: 'Counter Demo',
    icon: '🔢',
  },
  {
    path: '/docs',
    label: 'Documentation',
    icon: '📚',
  },
  {
    path: '/links',
    label: 'External Links',
    icon: '🔗',
  },
];
