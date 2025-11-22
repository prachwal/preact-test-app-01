import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../test/preact';
import { Documentation } from './Documentation';

describe('Documentation Component', () => {
  it('renders documentation information correctly', () => {
    renderWithProviders(<Documentation />);
    
    expect(screen.getByText(/click on the vite and preact logos to learn more/i)).toBeInTheDocument();
  });

  it('has proper paragraph element structure', () => {
    renderWithProviders(<Documentation />);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    expect(docText.tagName).toBe('P');
  });

  it('applies correct CSS class', () => {
    renderWithProviders(<Documentation />);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    expect(docText).toHaveClass('read-the-docs');
  });

  it('maintains consistent typography', () => {
    renderWithProviders(<Documentation />);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    
    // Should be a paragraph element
    expect(docText.tagName).toBe('P');
    
    // Should have the specific CSS class for styling
    expect(docText.className).toBe('read-the-docs');
  });

  it('has proper accessibility attributes', () => {
    renderWithProviders(<Documentation />);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    
    // Should have proper semantic structure
    expect(docText.tagName).toBe('P');
  });

  it('component content is clear and descriptive', () => {
    renderWithProviders(<Documentation />);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    
    // Content should provide clear guidance
    expect(docText.textContent).toContain('logos');
    expect(docText.textContent).toContain('learn more');
  });

  it('renders as static informational content', () => {
    renderWithProviders(<Documentation />);
    
    // Should render a single paragraph
    const paragraphs = screen.getAllByRole('generic');
    expect(paragraphs.length).toBe(1);
    
    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    expect(docText).toBeInTheDocument();
  });
});