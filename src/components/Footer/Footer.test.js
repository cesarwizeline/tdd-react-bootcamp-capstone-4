import Footer from './Footer';
import { screen, render } from '@testing-library/react';
test('should render footer', () => {
  render(<Footer />);
  expect(
    screen.getByText(
      /Ecommerce created during Wizeline’s Academy React Bootcamp/i
    )
  ).toBeInTheDocument();
});
