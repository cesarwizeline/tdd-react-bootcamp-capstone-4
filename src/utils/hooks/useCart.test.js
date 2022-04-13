import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useCart from './useCart';

const product1 = {
  id: 'abc',
  data: {
    name: 'nameProductTest',
    price: '12.50',
    mainimage: {
      url: 'https://urlimage.com.jpg',
    },
    stock: 11,
  },
  quantity: 5,
};
const product2 = {
  id: 'abc',
  data: {
    name: 'nameProductTest2',
    price: '50.50',
    mainimage: {
      url: 'https://urlimage.com.jpg',
    },
    stock: 5,
  },
  quantity: 1,
};

describe('use useCart', () => {
  test('adding product to cart', () => {
    const { result } = renderHook(() => useCart());
    expect(result.current.cart.products.length).toBe(0);
    act(() => {
      result.current.addProduct(product1, 1);
    });
    expect(result.current.cart.products.length).toBe(1);
  });

  test('removing product to cart', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProduct(product1, 1);
    });
    act(() => {
      result.current.removeProduct('abc');
    });

    expect(result.current.cart.products.length).toBe(0);
  });

  test('increase product quantity', () => {
    const { result, rerender } = renderHook(() => useCart());
    rerender();
    expect(result.current.cart.products.length).toBe(0);
    act(() => {
      result.current.addProduct(product1, 1);
    });
    expect(result.current.cart.products.length).toBe(1);
    act(() => {
      result.current.increase('abc');
    });
    expect(result.current.cart.products[0].quantity).toBe(2);
  });

  test('decrease product quantity', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.removeProduct('abc');
    });
    console.log('RESULT: ', result.current);
    expect(result.current.cart.products.length).toBe(0);
    act(() => {
      result.current.addProduct(product1, 2);
    });
    // expect(result.current.cart.products.length).toBe(2);
    act(() => {
      result.current.decrease('abc');
    });
    expect(result.current.cart.products[0].quantity).toBe(1);
  });
});
