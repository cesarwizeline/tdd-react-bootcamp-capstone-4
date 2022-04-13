import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

test('pagination functionality navigate among pages', async () => {
  const history = createMemoryHistory();
  act(() => {
    render(
      <BrowserRouter history={history}>
        <Pagination totalPages={4} />
      </BrowserRouter>
    );
  });
  const linksButtons = screen.getAllByRole('link');

  expect(linksButtons.length).toBe(4);

  const nextBtn = await screen.queryByTestId('nextPage');
  const prevBtn = await screen.queryByTestId('previousPage');

  expect(prevBtn).not.toBeInTheDocument();
  fireEvent.click(nextBtn);
  expect(location.search).toBe('?page=2');
  fireEvent.click(nextBtn);
  expect(location.search).toBe('?page=3');
  fireEvent.click(nextBtn);
  expect(nextBtn).not.toBeInTheDocument();
});
