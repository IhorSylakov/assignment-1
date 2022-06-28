import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { setupStore } from '../../store/store';

const store = setupStore();

test('renders logo text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const divElement = screen.getByTestId("header");
  expect(divElement).toBeInTheDocument();
});
