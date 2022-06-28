import { render, screen } from '@testing-library/react';
import About from './About';

test('renders copy text', () => {
  render(<About />);
  const text = screen.getByText(/About page/i);
  expect(text).toBeInTheDocument();
});
