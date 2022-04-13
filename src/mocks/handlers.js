import { rest } from 'msw';
import categories from './en-us/product-categories.json';
import products from './en-us/products.json';
import featuredBanners from './en-us/featured-banners.json';

export const handlers = [
  rest.get('../../mocks/en-us/products.json', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          results: [
            {
              id: 'ABC',
            },
          ],
        },
      ])
    );
    // return response(context.status(200), context.json(products));
  }),
  //   rest.get('categories', (request, response, context) => {
  //     return response(context.status(200), context.json(categories));
  //   }),
  //   rest.get('featured-banners', (request, response, context) => {
  //     return response(context.status(200), context.json(featuredBanners));
  //   }),
  //   rest.get('categories', (request, response, context) => {
  //     return response(context.status(404, ' custom message'));
  //   }),
];
