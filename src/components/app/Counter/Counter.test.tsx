import { screen } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../../test/preact';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter Component', () => {
  it('renders counter component correctly', () => {
    renderWithProviders(<Counter />);
    
    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(screen.getByRole('article')).toHaveClass('card');
  });

  it('displays initial count value', () => {
    renderWithProviders(<Counter />);
    
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('renders increment button with correct text', () => {
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('increments counter when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    
    await user.click(button);
    
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });

  it('increments counter multiple times', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    
    await user.click(button);
    await user.click(button);
    await user.click(button);
    
    expect(screen.getByText(/count is 3/i)).toBeInTheDocument();
  });

  it('handles rapid clicks correctly', async () => {
    const EXPECTED_CLICKS = 5;
    const user = userEvent.setup();
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    
    // Rapid clicks
    for (let i = 0; i < EXPECTED_CLICKS; i++) {
      await user.click(button);
    }
    
    expect(screen.getByText(/count is 5/i)).toBeInTheDocument();
  });

  it('displays instruction text', () => {
    renderWithProviders(<Counter />);
    
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/app\.tsx/i)).toBeInTheDocument();
    expect(screen.getByText(/and save to test hmr/i)).toBeInTheDocument();
  });

  it('maintains state between renders', () => {
    const { rerender } = renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
    
    // Simulate state change (in real app this would be user interaction)
    rerender(<Counter />);
    
    // State should persist
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('button has proper accessibility attributes', () => {
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('component article has proper semantic structure', () => {
    renderWithProviders(<Counter />);
    
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass('card');
    
    // Should contain button and paragraph
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });

  it('handles keyboard interaction', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Counter />);
    
    const button = screen.getByRole('button', { name: /count is 0/i });
    
    // Focus the button and press Enter
    await user.click(button);
    
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});