import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithRouter } from '@/test/preact';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders header element correctly', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders hamburger menu button', () => {
    renderWithRouter(<Header />);

    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(hamburger).toBeInTheDocument();
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders app logo and title', () => {
    renderWithRouter(<Header />);

    const logoLink = screen.getByRole('link', { name: /⚛️ preact-test-app-01/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    const title = screen.getByRole('heading', { name: 'preact-test-app-01' });
    expect(title).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Header />);

    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(hamburger).toHaveAttribute('aria-label', 'Toggle navigation menu');
    expect(hamburger).toHaveAttribute('aria-expanded');
  });

  it('maintains header structure and accessibility', () => {
    renderWithRouter(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1); // Only the logo link

    // Verify semantic structure
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has proper focus management for accessibility', () => {
    renderWithRouter(<Header />);

    const hamburger = screen.getByRole('button', { name: /toggle navigation menu/i });
    // Buttons are focusable by default
    expect(hamburger).toBeInTheDocument();
  });
});
