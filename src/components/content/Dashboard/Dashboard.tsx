/**
 * Dashboard - Home Page Component
 *
 * @remarks
 * Main dashboard page with overview cards and metrics
 *
 * @module components/content/Dashboard
 */

import { memo } from 'preact/compat';

/**
 * Dashboard component
 */
export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="dashboard-page__grid">
        <div className="card">
          <h2>Welcome to Preact Dashboard</h2>
          <p>This is a modern Preact application with:</p>
          <ul>
            <li>✅ Preact ISO Router for navigation</li>
            <li>✅ @preact/signals for state management</li>
            <li>✅ SCSS with BEM methodology</li>
            <li>✅ SOLID principles architecture</li>
            <li>✅ TypeScript strict mode</li>
          </ul>
        </div>

        <div className="card">
          <h2>Navigation</h2>
          <p>Use the sidebar to navigate between pages:</p>
          <ul>
            <li>Dashboard - This page</li>
            <li>Counter - Interactive counter demo</li>
            <li>Documentation - Project documentation</li>
            <li>External Links - Useful resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Dashboard.displayName = 'Dashboard';
