import { screen, render } from '@testing-library/react';
import NotFound from './NotFound';

describe('Not Found Page', () => {
  test('show not found page', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
