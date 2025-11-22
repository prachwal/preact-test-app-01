/**
 * Sidebar Component - Navigation Sidebar
 *
 * @remarks
 * Responsive sidebar with navigation links.
 * Desktop: Always visible
 * Mobile: Toggleable overlay
 *
 * @module components/layout/Sidebar
 */

import { memo } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { sidebarOpen, closeSidebar } from '@/signals/navigationSignals';
import { navigationItems } from '@/routes/navigation';
import { BASE_URL } from '@/constants/app';

/**
 * Mobile breakpoint for responsive behavior
 */
const MOBILE_BREAKPOINT = 1024;

/**
 * Sidebar component
 */
export const Sidebar = memo(() => {
  const { url } = useLocation();
  const isOpen = sidebarOpen.value;
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  // Handle window resize with debounce
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle Escape key to close sidebar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    // Close sidebar on mobile after navigation
    if (isMobile) {
      closeSidebar();
    }
  };

  const sidebarClasses = ['sidebar', isOpen && 'sidebar--open'].filter(Boolean).join(' ');

  return (
    <>
      <aside className={sidebarClasses} role="navigation" aria-label="Main navigation">
        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            {navigationItems.map(item => {
              // Build full path with BASE_URL for href attribute
              const fullPath = BASE_URL === '/' ? item.path : `${BASE_URL.replace(/\/$/, '')}${item.path}`;
              // Check if current route matches (url from useLocation is already scoped)
              const isActive = url === item.path;
              const linkClasses = ['sidebar__link', isActive && 'sidebar__link--active']
                .filter(Boolean)
                .join(' ');

              return (
                <li key={item.path} className="sidebar__item"> {/* item.path is unique */}
                  <a
                    href={fullPath}
                    className={linkClasses}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {(item.icon != null) && <span className="sidebar__icon">{item.icon}</span>}
                    <span className="sidebar__label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          role="presentation"
          aria-hidden="true"
        />
      )}
    </>
  );
});
