import { render } from 'preact';
import { LocationProvider } from 'preact-iso';
import './styles/main.scss';
import { App } from './app.tsx';

const appElement = document.getElementById('app');
if (appElement) {
  render(
    <LocationProvider>
      <App />
    </LocationProvider>,
    appElement
  );
} else {
  throw new Error('Failed to find app element');
}
