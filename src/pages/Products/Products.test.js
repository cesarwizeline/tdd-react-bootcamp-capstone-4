import { screen, render, waitFor, act } from '@testing-library/react';
// import { renderHook, act } from '@testing-library/react-hooks';
import Products from './Products';

// import useProducts from '../../utils/hooks/useProducts';
import productsResponse from '../../mocks/en-us/products.json';

describe('Products', () => {
  test('is loading products', async () => {
    act(() => {
      render(<Products />);
    });
    const loadingMessage = await waitFor(() => screen.findByText('Loading...'));
    expect(loadingMessage).toBeInTheDocument();
  });

  test('render Products, verify first element is in the document', async () => {
    act(() => {
      render(<Products />);
    });

    const firstProduct = await waitFor(
      () => screen.findByText(productsResponse.results[0].id),
      { timeout: 1500 }
    );

    expect(firstProduct).toBeInTheDocument();
  });
});
