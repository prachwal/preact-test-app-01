import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from './test/preact';
import { App } from './app';

describe('App Component', () => {
  it('renders the main heading', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('heading', { name: /vite.*preact/i })).toBeInTheDocument();
  });

  it('handles button clicks correctly', async () => {
    renderWithProviders(<App />);
    
    const button = screen.getByRole('button', { name: /count is/i });
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
    
    // Simulate button click
    button.click();
    
    // Wait for state update and re-render
    await new Promise(resolve => setTimeout(resolve, 0));
    
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  it('displays correct initial state', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('renders logos correctly', () => {
    renderWithProviders(<App />);
    
    // Check that logo images are present
    const viteLogo = screen.getByAltText('Vite logo');
    const preactLogo = screen.getByAltText('Preact logo');
    
    expect(viteLogo).toBeInTheDocument();
    expect(preactLogo).toBeInTheDocument();
  });

  it('renders documentation links', () => {
    renderWithProviders(<App />);
    
    // Check for documentation links
    const preactGuideLink = screen.getByText(/create-preact/i);
    expect(preactGuideLink).toBeInTheDocument();
    expect(preactGuideLink.closest('a')).toHaveAttribute('href', 'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app');
  });
});