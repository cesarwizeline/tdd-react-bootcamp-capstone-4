import { screen, render } from '@testing-library/react';
import ShoppingCartIcon from './ShoppingCartIcon';

describe('Should render correctly the shopping cart icon with qty', () => {
  test('should render shoppingcard icon', () => {
    render(<ShoppingCartIcon />);
    expect(screen.getByTestId('shoppingcart-icon')).toBeInTheDocument();
  });
});
