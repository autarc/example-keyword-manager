/**
 * # Keyword (Storage) (Test)
 *
 *
 */

import { createKeyword, findKeywordByName, findOrCreateKeyword } from '../storage';

import type { Keyword } from '~/types';

describe('createKeyword', () => {
  it('should create a new keyword and persist it', async () => {
    const localCache = new Map<string, Keyword>();

    const keyword = await createKeyword('Example Name', localCache);

    expect(keyword.name).toBe('Example Name');
    expect(localCache.size).toBe(1);
  });

  it('should throw an error if a keyword with the name already exist', async () => {
    const localCache = new Map<string, Keyword>([
      [
        'id',
        {
          id: 'id',
          name: 'Example Name',
        },
      ],
    ]);

    await expect(createKeyword('Example Name', localCache)).rejects.toThrowError();
  });
});

describe('findKeywordByName', () => {
  it('should retrieve a matching keyword', async () => {
    const localCache = new Map<string, Keyword>();

    let match = await findKeywordByName('Example Name', localCache);

    expect(match).toBeNull();

    localCache.set('id', {
      id: 'id',
      name: 'Example Name',
    });

    match = await findKeywordByName('Example Name', localCache);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- ensure in test case
    expect(match!.name).toBe('Example Name');
  });
});

describe('findOrCreateKeyword', () => {
  it('should retrieve a keyword even if it does not exist before', async () => {
    const localCache = new Map<string, Keyword>();

    const keyword = await findOrCreateKeyword('Example Name', localCache);

    expect(keyword.name).toBe('Example Name');
  });
});
