import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupStore } from '../../store/store';

const store = setupStore();

test('renders app', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const divElement = screen.getByTestId("app");
  expect(divElement).toBeInTheDocument();
});
