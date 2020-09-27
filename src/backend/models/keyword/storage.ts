/**
 * # Keyword (Storage)
 *
 *
 */

import { ulid } from 'ulid';

import type { Keyword } from '~/types';

/**
 * Local in-memory cache
 */
const keywordCache = new Map<string, Keyword>();

/**
 * Retrieve a persisted keyword by its name (ensured availability)
 *
 * @param name - label of the keyword
 * @param [cache] - persisting data structure
 */
export async function findOrCreateKeyword(name: string, cache = keywordCache) {
  const keyword = await findKeywordByName(name, cache);

  if (keyword) {
    return keyword;
  }

  return createKeyword(name, cache);
}

/**
 * Retrieve a persisted keyword by its name
 *
 * @param name - label of the keyword
 * @param [cache] - persisting data structure
 */
export function findKeywordByName(name: string, cache = keywordCache) {
  for (const keyword of cache.values()) {
    if (keyword.name === name) {
      return Promise.resolve(keyword);
    }
  }

  return Promise.resolve(null);
}

/**
 * Create and persist a new keyword
 *
 * @param name - label of the keyword
 * @param [cache] - persisting data structure
 */
export async function createKeyword(name: string, cache = keywordCache) {
  const existingKeyword = await findKeywordByName(name, cache);
  if (existingKeyword) {
    throw new Error(`A keyword with the name "${name}" already exist!`);
  }

  const keyword: Keyword = {
    id: ulid(),
    name,
  };

  cache.set(keyword.id, keyword);

  return keyword;
}
