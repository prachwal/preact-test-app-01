/**
 * DashboardLayout Component - Main Application Layout
 *
 * @remarks
 * Provides the main layout structure with header, sidebar, content area, and footer.
 * Responsive layout that adapts to mobile/desktop viewports.
 *
 * @module components/layout/DashboardLayout
 *
 * @example
 * ```tsx
 * <DashboardLayout>
 *   <YourContent />
 * </DashboardLayout>
 * ```
 */

import { memo } from 'preact/compat';
import type { ComponentChildren } from 'preact';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Footer } from '../Footer';
import { sidebarOpen } from '@/signals/navigationSignals';

/**
 * DashboardLayout props
 */
export interface DashboardLayoutProps {
  /** Page content */
  children: ComponentChildren;
}

/**
 * DashboardLayout component
 *
 * @param props - Layout props
 * @returns Dashboard layout structure
 */
export const DashboardLayout = memo<DashboardLayoutProps>(({ children }) => {
  const isOpen = sidebarOpen.value;

  const layoutClasses = ['dashboard', isOpen && 'dashboard--sidebar-open']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={layoutClasses}>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Header />
      <Sidebar />
      <main className="dashboard__main" id="main-content" role="main">
        <div className="dashboard__content">{children}</div>
      </main>
      <Footer />
    </div>
  );
});

DashboardLayout.displayName = 'DashboardLayout';
