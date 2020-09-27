/**
 * # Datamuse Service
 *
 * See: http://www.datamuse.com/api/
 */

import { URLSearchParams } from 'url';

type DatamuseWord = {
  word: string;
  score: number;
  tags?: string[];
};

const BASE_URL = 'https://api.datamuse.com';
const DEFAULT_MAX_RESULTS = 10;

/**
 * Load similar meaning words to a provided one
 *
 * @param input - value used to find words
 * @param max   - maximum results
 */
export async function getSimilarMeaningWords(input: string, max = DEFAULT_MAX_RESULTS) {
  const url = `${BASE_URL}/words`;
  const params = new URLSearchParams([
    ['max', max.toString()],
    ['ml', input],
  ]);

  const response = await fetch(`${url}?${params.toString()}`);

  return (await response.json()) as Promise<DatamuseWord[]>;
}
