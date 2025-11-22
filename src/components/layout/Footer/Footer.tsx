/**
 * Footer Component - Bottom Bar
 *
 * @remarks
 * Footer with copyright and build information
 *
 * @module components/layout/Footer
 */

import { memo } from 'preact/compat';
import { memo } from 'preact/compat';
import { APP_NAME, APP_VERSION } from '@/constants/app';

/**
 * Footer component
 */
export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__main">
          <p className="footer__title">{APP_NAME}</p>
          <p className="footer__build-info">
            Build version: <code>{APP_VERSION}</code>
          </p>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © {currentYear} {APP_NAME}. Built with Preact.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
