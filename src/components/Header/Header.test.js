import { screen, render } from '@testing-library/react';
import Header from './Header';
describe('Render Header', () => {
  test('should render logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
  test('should render searcher', () => {
    render(<Header />);
    expect(
      screen.getByRole('textbox', { name: 'searcher' })
    ).toBeInTheDocument();
  });
  test('should render shoppingcard icon', () => {
    render(<Header />);
    expect(screen.getByTestId('shoppingcart-icon')).toBeInTheDocument();
  });
});
