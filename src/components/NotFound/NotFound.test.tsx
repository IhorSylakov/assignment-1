import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('renders not found text', () => {
  render(<NotFound />);
  const text = screen.getByText(/Not Found!!!/i);
  expect(text).toBeInTheDocument();
});
