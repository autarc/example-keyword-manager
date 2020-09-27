/**
 * # Network Handlers
 *
 * See: https://mswjs.io/docs/getting-started/mocks/rest-api
 */

import { rest, graphql } from 'msw';

module.exports.handlers = [
  rest.get('https://api.datamuse.com/words', (request, response, ctx) => {
    const input = request.url.searchParams.get('ml');

    const result = [];

    if (input === 'two-results') {
      result.push(
        {
          word: 'One',
          score: 100,
        },
        {
          word: 'Two',
          score: 99,
        },
      );
    }

    // eslint-disable-next-line no-magic-numbers -- HTTP status code
    return response(ctx.status(200), ctx.json(result));
  }),
  //
  graphql.query('GetCategoriesQuery', (request, response, ctx) => {
    return response(
      ctx.data({
        categories: [],
      }),
    );
  }),
];
