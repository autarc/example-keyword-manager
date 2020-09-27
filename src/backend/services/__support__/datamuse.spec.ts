/**
 * # Datamuse Service (Test)
 *
 *
 */

import { getSimilarMeaningWords } from '../datamuse';

describe('getSimilarMeaningWords', () => {
  it('should retrieve results from the external service', async () => {
    // stubs defined 'test/mocks/network-handlers.js'
    const words = await getSimilarMeaningWords('two-results');

    expect(words).toHaveLength(2);
  });
});
