import { screen, render } from '@testing-library/react';
import useCart from '../../utils/hooks/useCart';
import ShoppingCart from './ShoppingCart';

/**
  - 6.1. Validate that an empty state is displayed when there 
   * are no items in the cart.
    - 6.2. Validate that the list of products is shown when there are items in the cart. 
    Each row should contain the main image of the product, its name, unit price, a 
    quantity selector, subtotal and a “remove from cart icon”.
    - 6.3. Validate that the cart total label displays the sum of the subtotals of 
    all items in the cart.
    - 6.4. Validate that you can update the quantity of items for a particular product 
    in the cart. Don’t forget to validate that you don’t exceed the stock units available 
    for the selected product.
    - 6.5. Validate that you can remove a product from the cart after clicking on 
    the “remove from cart icon”.

    */

jest.mock('../../utils/hooks/useCart');

describe('Shopping Cart', () => {
  test('Show cart is empty when there are no products in state', async () => {
    useCart.mockReturnValue({
      cart: {
        products: [],
        total: '0.00',
      },
    });
    render(<ShoppingCart />);
    const noItemsMessage = await screen.findByText(
      /There are no items in the cart/i
    );
    expect(noItemsMessage).toBeInTheDocument();
  });

  test('render table of products when list is not empty', () => {
    useCart.mockReturnValue({
      cart: {
        products: [
          {
            id: 1,
            name: 'test',
            price: 15,
            quantity: 2,
          },
          {
            id: 1,
            name: 'product 2',
            price: 20,
            quantity: 1,
          },
        ],
        total: '0.00',
      },
    });

    render(<ShoppingCart />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('total label displays the sum of the subtotals of all items', () => {
    useCart.mockReturnValue({
      cart: {
        products: [
          {
            id: 1,
            name: 'test',
            price: 15,
            quantity: 2,
          },
          {
            id: 1,
            name: 'product 2',
            price: 20,
            quantity: 1,
          },
        ],
        total: '50.00',
      },
    });
    render(<ShoppingCart />);

    const subtotal = screen.getByTestId('subtotal');
    expect(subtotal).toBeInTheDocument();
    expect(subtotal.textContent).toEqual('$50.00');
  });

  // Validate that you can update the quantity of items for a particular product
  // in the cart. Don’t forget to validate that you don’t exceed the stock units available
  // for the selected product.

  // test('update qty and validate stock', () => {
  //   expect(true).toBe(true);
  // });
});
