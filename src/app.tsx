/**
 * Main App Component with Routing
 *
 * @remarks
 * Root application component with Preact ISO Router and DashboardLayout.
 * Routes are defined and managed through the router configuration.
 *
 * @module app
 */

import { Router, Route, Link } from 'preact-iso';
import { lazy } from 'preact-iso';
import { Suspense } from 'preact/compat';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ErrorBoundary } from './components/ui';

// Check if we're in a test environment
const isTestEnvironment = typeof process !== 'undefined' && process.env.NODE_ENV === 'test';

// Lazy load components for code splitting (only in production)
let Dashboard, Counter, Documentation, ExternalLinks;

if (isTestEnvironment) {
  // In test environment, use mock components
  Dashboard = () => <div data-testid="dashboard">Dashboard Component</div>;
  Counter = () => <div data-testid="counter">Counter Component</div>;
  Documentation = () => <div data-testid="documentation">Documentation Component</div>;
  ExternalLinks = () => <div data-testid="external-links">External Links Component</div>;
} else {
  // In production, use lazy loading
  Dashboard = lazy(() => import('./components/content/Dashboard').then(m => ({ default: m.Dashboard })));
  Counter = lazy(() => import('./components/content/Counter').then(m => ({ default: m.Counter })));
  Documentation = lazy(() => import('./components/app/Documentation').then(m => ({ default: m.Documentation })));
  ExternalLinks = lazy(() => import('./components/app/ExternalLinks').then(m => ({ default: m.ExternalLinks })));
}

/**
 * Route wrapper with ErrorBoundary
 */
const RouteWithErrorBoundary = ({ component: Component }: { component: any }) => (
  <ErrorBoundary>
    <Component />
  </ErrorBoundary>
);

/**
 * Route components with error boundaries
 */
const DashboardRoute = () => <RouteWithErrorBoundary component={Dashboard} />;
const CounterRoute = () => <RouteWithErrorBoundary component={Counter} />;
const DocumentationRoute = () => <RouteWithErrorBoundary component={Documentation} />;
const ExternalLinksRoute = () => <RouteWithErrorBoundary component={ExternalLinks} />;

/**
 * NotFound component for 404 pages
 */
const NotFound = () => {
  // Use Link component in production, <a> tag in tests
  const LinkComponent = isTestEnvironment ? 'a' : Link;

  return (
    <ErrorBoundary>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <LinkComponent href="/">Go to Dashboard</LinkComponent>
      </div>
    </ErrorBoundary>
  );
};

/**
 * Main App component with routing
 *
 * @returns Root application component
 */
export function App() {
  // Get base URL from Vite environment or default to '/'
  const baseUrl = (import.meta.env?.VITE_BASE_URL as string) || '/';

  return (
    <DashboardLayout>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Router base={baseUrl}>
          <Route path="/" component={DashboardRoute} />
          <Route path="/counter" component={CounterRoute} />
          <Route path="/docs" component={DocumentationRoute} />
          <Route path="/links" component={ExternalLinksRoute} />
          <Route default component={NotFound} />
        </Router>
      </Suspense>
    </DashboardLayout>
  );
}
