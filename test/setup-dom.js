/**
 * # Setup DOM
 *
 *
 */

import '@testing-library/jest-dom';
import 'isomorphic-unfetch';
import { setupServer } from 'msw/node';

import { handlers } from './mocks/network-handlers';

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
