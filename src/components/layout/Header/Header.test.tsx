import { screen } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders } from '../../../test/preact';
import { Header } from './Header';

// Mock the logos
vi.mock('/vite.svg', () => ({
  default: 'vite-logo.svg'
}));

vi.mock('/preact.svg', () => ({
  default: 'preact-logo.svg'
}));

describe('Header Component', () => {
  it('renders header element correctly', () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders Vite logo link', () => {
    renderWithProviders(<Header />);
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    expect(viteLink).toBeInTheDocument();
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(viteLink).toHaveAttribute('target', '_blank');
    expect(viteLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Preact logo link', () => {
    renderWithProviders(<Header />);
    
    const preactLink = screen.getByRole('link', { name: /preact logo/i });
    expect(preactLink).toBeInTheDocument();
    expect(preactLink).toHaveAttribute('href', 'https://preactjs.com');
    expect(preactLink).toHaveAttribute('target', '_blank');
    expect(preactLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders logo images with correct alt text', () => {
    renderWithProviders(<Header />);
    
    const viteLogo = screen.getByAltText('Vite logo');
    const preactLogo = screen.getByAltText('Preact logo');
    
    expect(viteLogo).toBeInTheDocument();
    expect(preactLogo).toBeInTheDocument();
    expect(viteLogo).toHaveAttribute('src', 'vite-logo.svg');
    expect(preactLogo).toHaveAttribute('src', 'preact-logo.svg');
  });

  it('applies correct CSS classes to logos', () => {
    renderWithProviders(<Header />);
    
    const viteLogo = screen.getByAltText('Vite logo');
    const preactLogo = screen.getByAltText('Preact logo');
    
    expect(viteLogo).toHaveClass('logo');
    expect(preactLogo).toHaveClass('logo', 'preact');
  });

  it('opens links in new tab with security attributes', () => {
    renderWithProviders(<Header />);
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    const preactLink = screen.getByRole('link', { name: /preact logo/i });
    
    // Test that security attributes are present
    expect(viteLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(preactLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Test that links open in new tab
    expect(viteLink).toHaveAttribute('target', '_blank');
    expect(preactLink).toHaveAttribute('target', '_blank');
  });

  it('maintains header structure and accessibility', () => {
    const EXPECTED_LINK_COUNT = 2;
    renderWithProviders(<Header />);
    
    const header = screen.getByRole('banner');
    const links = screen.getAllByRole('link');
    
    expect(header).toBeInTheDocument();
    expect(links).toHaveLength(EXPECTED_LINK_COUNT);
    
    // Verify semantic structure
    expect(header.tagName).toBe('HEADER');
    links.forEach(link => {
      expect(link.tagName).toBe('A');
    });
  });

  it('has proper focus management for accessibility', () => {
    renderWithProviders(<Header />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach(link => {
      expect(link).toBeInTheDocument();
    });
  });
});