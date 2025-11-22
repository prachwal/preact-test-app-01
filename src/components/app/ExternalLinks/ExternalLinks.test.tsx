import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../test/preact';
import { ExternalLinks } from './ExternalLinks';

describe('ExternalLinks Component', () => {
  it('renders external links paragraph correctly', () => {
    renderWithProviders(<ExternalLinks />);
    
    expect(screen.getByText(/check out/i)).toBeInTheDocument();
    expect(screen.getByText(/create-preact/i)).toBeInTheDocument();
    expect(screen.getByText(/the official preact \+ vite starter/i)).toBeInTheDocument();
  });

  it('renders external link with correct href', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app'
    );
  });

  it('opens link in new tab', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('includes security attributes for external links', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    expect(link).toHaveAttribute('href');
  });

  it('maintains text structure with proper formatting', () => {
    renderWithProviders(<ExternalLinks />);
    
    // Check for the specific text structure
    expect(screen.getByText(/^check out\s+/i)).toBeInTheDocument();
    expect(screen.getByText(/\s+,\s+the official preact \+ vite starter$/i)).toBeInTheDocument();
    
    // Verify link is in the middle of the text
    const link = screen.getByRole('link', { name: /create-preact/i });
    const paragraph = link.closest('p');
    expect(paragraph).toBeInTheDocument();
  });

  it('link has descriptive text for screen readers', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    expect(link.textContent).toBe('create-preact');
  });

  it('component renders as single paragraph element', () => {
    renderWithProviders(<ExternalLinks />);
    
    const link = screen.getByRole('link', { name: /create-preact/i });
    const paragraph = link.closest('p');
    
    expect(paragraph).toBeInTheDocument();
    expect(paragraph?.textContent).toContain('Check out');
    expect(paragraph?.textContent).toContain('create-preact');
    expect(paragraph?.textContent).toContain('the official Preact + Vite starter');
  });
});