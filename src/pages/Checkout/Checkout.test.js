import { screen, render } from '@testing-library/react';
import Checkout from './Checkout';

describe('should render checkout', () => {
  // test('should contain Form', () => {
  //   /**
  //    * Text input to capture name of customer
  //    * Text input to capture email of customer
  //    * Text input to capture post/zip of customer
  //    * Textarea to capture the order notes
  //    *
  //    */
  //   render(<Checkout />);

  // });
  test('Order summatory table', () => {
    render(<Checkout />);
    const name = screen.getByLabelText('Fullname');
    const email = screen.getByLabelText('Email');
    const postZip = screen.getByLabelText('PostZip');
    const orderNotes = screen.getByLabelText('OrderNotes');
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(postZip).toBeInTheDocument();
    expect(orderNotes).toBeInTheDocument();
  });
  // test('Each row should only show the name of the product, num of items, subtotal', () => {
  //   render(<Checkout />);
  // });
  // test('At the buttom of table should be a label to display cart total.', () => {
  //   render(<Checkout />);
  // });
  test('Go back to cart button.', () => {
    render(<Checkout />);
    const returnCartButton = screen.getByRole('button', {
      name: 'Go back to cart button',
    });
    expect(returnCartButton).toBeInTheDocument();
  });
  test('Order button.', () => {
    render(<Checkout />);
    const returnCartButton = screen.getByRole('button', {
      name: /please order/i,
    });
    expect(returnCartButton).toBeInTheDocument();
  });
});
