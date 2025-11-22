import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithRouter } from '@/test/preact';
import { Documentation } from './Documentation';

describe('Documentation Component', () => {
  it('renders documentation information correctly', () => {
    renderWithRouter(<Documentation />);

    expect(
      screen.getByText(/click on the vite and preact logos to learn more/i)
    ).toBeInTheDocument();
  });

  it('has proper paragraph element structure', () => {
    renderWithRouter(<Documentation />);

    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    expect(docText.tagName).toBe('P');
  });

  it('applies correct CSS class', () => {
    renderWithRouter(<Documentation />);

    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);
    expect(docText).toHaveClass('read-the-docs');
  });

  it('maintains consistent typography', () => {
    renderWithRouter(<Documentation />);

    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);

    // Should be a paragraph element
    expect(docText.tagName).toBe('P');

    // Should have the specific CSS class for styling
    expect(docText.className).toBe('read-the-docs');
  });

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Documentation />);

    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);

    // Should have proper semantic structure
    expect(docText.tagName).toBe('P');
  });

  it('component content is clear and descriptive', () => {
    renderWithRouter(<Documentation />);

    const docText = screen.getByText(/click on the vite and preact logos to learn more/i);

    // Content should provide clear guidance
    expect(docText.textContent).toContain('logos');
    expect(docText.textContent).toContain('learn more');
  });

  it('renders as static informational content', () => {
    renderWithRouter(<Documentation />);

    // Should render heading and paragraph
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/click on the vite and preact logos to learn more/i)).toBeInTheDocument();
  });
});
