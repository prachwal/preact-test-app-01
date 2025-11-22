import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithRouter } from './test/preact';
import { App } from './app';

describe('App Component', () => {
  it('renders the app structure', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders skip to main link', () => {
    renderWithRouter(<App />);
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders hamburger menu', () => {
    renderWithRouter(<App />);
    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders footer with app info', () => {
    renderWithRouter(<App />);
    const footerTitles = screen.getAllByText('preact-test-app-01');
    expect(footerTitles.length).toBeGreaterThan(0);
    expect(screen.getByText(/build version/i)).toBeInTheDocument();
  });
});
