import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should display app name', () => {
    render(<Footer />);
    const title = screen.getByText('preact-test-app-01');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('P');
  });

  it('should display build version', () => {
    render(<Footer />);
    expect(screen.getByText(/Build version:/i)).toBeInTheDocument();
  });

  it('should display copyright year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('should have correct CSS classes', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
  });
});
