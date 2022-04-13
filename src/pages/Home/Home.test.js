import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  beforeAll(() => {
    render(<Home />);
  });
  // test('Render home page', () => {
  //   expect(screen.getByText('Home')).toBeInTheDocument();
  // });

  test('Render icon', () => {
    render(<Home />);

    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
  });
});
