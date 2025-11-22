/**
 * Main App Component with Routing
 *
 * @remarks
 * Root application component with Preact ISO Router and DashboardLayout.
 * Routes are defined and managed through the router configuration.
 *
 * @module app
 */

import { Router, Route } from 'preact-iso';
import { lazy } from 'preact-iso';
import { Suspense } from 'preact/compat';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ErrorBoundary } from './components/ui';

// Lazy load components for code splitting
const Dashboard = lazy(() => import('./components/content/Dashboard').then(m => ({ default: m.Dashboard })));
const Counter = lazy(() => import('./components/content/Counter').then(m => ({ default: m.Counter })));
const Documentation = lazy(() => import('./components/app/Documentation').then(m => ({ default: m.Documentation })));
const ExternalLinks = lazy(() => import('./components/app/ExternalLinks').then(m => ({ default: m.ExternalLinks })));

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
const NotFound = () => (
  <ErrorBoundary>
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go to Dashboard</a>
    </div>
  </ErrorBoundary>
);

/**
 * Main App component with routing
 *
 * @returns Root application component
 */
export function App() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Router>
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
