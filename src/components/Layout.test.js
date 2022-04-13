import { screen, render } from '@testing-library/react';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';

describe('Render Layout', () => {
  test('render Header', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  test('render Footer', () => {
    render(<Footer />);
    const textToFind =
      'Ecommerce created during Wizeline’s Academy React Bootcamp';
    const footerText = screen.getByText(textToFind);
    expect(footerText).toBeInTheDocument();
  });
  test('render MainContainer', () => {
    render(<MainContainer />);
  });
});
