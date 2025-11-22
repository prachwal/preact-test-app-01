import { render } from '@testing-library/preact';
import { LocationProvider } from 'preact-iso';
import type { ReactElement } from 'react'; // For type compatibility

/**
 * Custom render function that includes router provider
 * @param ui - Component to render
 * @param options - Render options
 * @returns Testing library render result
 */
export function renderWithRouter(ui: ReactElement, options?: Parameters<typeof render>[1]) {
  return render(
    <LocationProvider>
      {ui}
    </LocationProvider>,
    options
  );
}
