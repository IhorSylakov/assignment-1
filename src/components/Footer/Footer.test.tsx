import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders copy text', () => {
  render(<Footer />);
  const text = screen.getByText(/2022/i);
  expect(text).toBeInTheDocument();
});
