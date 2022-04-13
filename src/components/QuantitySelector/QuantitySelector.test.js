import { screen, render, fireEvent } from '@testing-library/react';
import QuantitySelector from './QuantitySelector';
let quantity = 0;
const increaseHandler = jest.fn(() => (quantity += 1));
const reduceHandler = jest.fn(() => (quantity -= 1));

describe('render quantity selector', () => {
  test('should render two buttons', () => {
    render(
      <QuantitySelector
        increaseHandler={increaseHandler}
        reduceHandler={reduceHandler}
        quantity={quantity}
      />
    );
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByLabelText('quantity')).toBeInTheDocument();
    // expect(true).toBe(false);
  });
  test('increase quantity after click button', () => {
    render(
      <QuantitySelector
        increaseHandler={increaseHandler}
        reduceHandler={reduceHandler}
        quantity={quantity}
      />
    );
    const quantityLabel = screen.getByLabelText('quantity');
    expect(parseInt(quantityLabel.value)).toEqual(0);
    const btnIncrease = screen.getByRole('button', { name: '+' });
    fireEvent.click(btnIncrease);
    expect(parseInt(quantityLabel.value)).toEqual(1);
    // expect(true).toBe(false);
  });
});
