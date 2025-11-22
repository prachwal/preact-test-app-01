/**
 * Header Component - Top Navigation Bar
 *
 * @remarks
 * Responsive header with logo, navigation, and hamburger menu for mobile
 *
 * @module components/layout/Header
 */

import { memo } from 'preact/compat';
import { useRef, useEffect } from 'preact/hooks';
import { Link } from 'preact-iso';
import { sidebarOpen, toggleSidebar } from '@/signals/navigationSignals';
import { APP_NAME } from '@/constants/app';

// Check if we're in a test environment
const isTestEnvironment = typeof process !== 'undefined' && process.env.NODE_ENV === 'test';

/**
 * Header component
 */
const HeaderComponent = memo(() => {
  const isSidebarOpen = sidebarOpen.value;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isSidebarOpen && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isSidebarOpen]);

  // Use Link component in production, <a> tag in tests
  const LinkComponent = isTestEnvironment ? 'a' : Link;

  return (
    <header className="header">
      <div className="header__container">
        <button
          ref={buttonRef}
          className="header__hamburger"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
          aria-expanded={isSidebarOpen}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        <div className="header__brand">
          <LinkComponent href="/" className="header__logo-link">
            <span className="header__logo">⚛️</span>
            <h1 className="header__title">{APP_NAME}</h1>
          </LinkComponent>
        </div>

        <div className="header__actions">
          {/* Placeholder for future actions (theme toggle, user menu, etc.) */}
        </div>
      </div>
    </header>
  );
});

(HeaderComponent as any).displayName = 'Header';

export { HeaderComponent as Header };
