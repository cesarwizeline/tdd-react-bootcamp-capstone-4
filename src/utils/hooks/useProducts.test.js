import { renderHook, act } from '@testing-library/react-hooks';
import useProducts from './useProducts';

test('should fetch product data', () => {
  const { result, rerender } = renderHook(() => useProducts());

  rerender();
  act(() => {
    // eslint-disable-next-line no-unused-expressions
    result.current;
  });
  console.log(result.current);
  expect(result.current.products.length).toBeGreaterThan(1);
});
