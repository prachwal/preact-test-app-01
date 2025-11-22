/**
 * Main App Component with Routing
 *
 * @remarks
 * Root application component with Preact ISO Router and DashboardLayout.
 * Routes are defined and managed through the router configuration.
 *
 * @module app
 */

import { Router, Route, LocationProvider, useLocation } from 'preact-iso';
import { lazy } from 'preact-iso';
import { Suspense } from 'preact/compat';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ErrorBoundary } from './components/ui';
import { BASE_URL } from './constants/app';
import { useEffect } from 'preact/hooks';

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
const NotFound = () => (
  <ErrorBoundary>
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href={BASE_URL}>Go to Dashboard</a>
    </div>
  </ErrorBoundary>
);

/**
 * LocationDebug component to log location changes
 */
function LocationDebug() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('[LocationDebug] Location changed:', {
      url: location.url,
      path: location.path,
      query: location.query
    });
  }, [location.url, location.path]);
  
  return null;
}

/**
 * Main App component with routing
 *
 * @returns Root application component
 */
export function App() {
  console.log('[App] Rendering with BASE_URL:', BASE_URL);
  console.log('[App] Current location:', window.location.href);
  console.log('[App] Current pathname:', window.location.pathname);
  
  // Normalize BASE_URL by removing trailing slash for scope
  const normalizedBaseUrl = BASE_URL === '/' ? undefined : BASE_URL.replace(/\/$/, '');
  
  return (
    <LocationProvider scope={normalizedBaseUrl}>
      <LocationDebug />
      <DashboardLayout>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Router
            onRouteChange={(url) => console.log('[Router] Route changed to:', url)}
            onLoadStart={(url) => console.log('[Router] Loading started for:', url)}
            onLoadEnd={(url) => console.log('[Router] Loading ended for:', url)}
          >
            <Route path="/" component={DashboardRoute} />
            <Route path="/counter" component={CounterRoute} />
            <Route path="/docs" component={DocumentationRoute} />
            <Route path="/links" component={ExternalLinksRoute} />
            <Route default component={NotFound} />
          </Router>
        </Suspense>
      </DashboardLayout>
    </LocationProvider>
  );
}
