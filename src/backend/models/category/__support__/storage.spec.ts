/**
 * # Category (Storage) (Test)
 *
 *
 */

import {
  createCategory,
  findCategoryByName,
  updateCategory,
  getCategory,
  getCategories,
  deleteCategory,
} from '../storage';

import type { Category } from '~/types';

describe('createCategory', () => {
  it('should create a new category and persist it', async () => {
    const localCache = new Map<string, Category>();

    const category = await createCategory('Example', localCache);

    expect(category.name).toBe('Example');
    expect(localCache.size).toBe(1);
  });
});

describe('findCategoryByName', () => {
  it('should retrieve a matching category', async () => {
    const localCache = new Map<string, Category>();

    let match = await findCategoryByName('Example Name', localCache);

    expect(match).toBeNull();

    localCache.set('id', {
      id: 'id',
      name: 'Example Name',
      keywords: [],
    });

    match = await findCategoryByName('Example Name', localCache);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- ensure in test case
    expect(match!.name).toBe('Example Name');
  });
});

describe('getCategory', () => {
  it('should retrieve the selected category', async () => {
    const localCache = new Map<string, Category>([
      [
        'id',
        {
          id: 'id',
          name: 'Example Name',
          keywords: [],
        },
      ],
    ]);

    const category = await getCategory('id', localCache);

    expect(category.name).toBe('Example Name');
  });
});

describe('getCategories', () => {
  it('should retrieve all categories', async () => {
    const localCache = new Map<string, Category>([
      [
        'id',
        {
          id: 'id',
          name: 'Example Name',
          keywords: [],
        },
      ],
      [
        'id-2',
        {
          id: 'id-2',
          name: 'Example Name 2',
          keywords: [],
        },
      ],
    ]);

    const categories = await getCategories(localCache);

    expect(categories).toHaveLength(2);
  });
});

describe('updateCategory', () => {
  it('should update the defined fields of the selected category', async () => {
    const localCache = new Map<string, Category>([
      [
        'id',
        {
          id: 'id',
          name: 'Example Name',
          keywords: [],
        },
      ],
    ]);

    await updateCategory(
      'id',
      {
        keywords: [
          {
            id: 'Keyword Id',
            name: 'Keyword Name',
          },
        ],
      },
      localCache,
    );

    const updatedCategory = localCache.get('id');

    expect(updatedCategory).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- ensure in test case
    expect(updatedCategory!.keywords).toHaveLength(1);
  });

  it('should throw an error if the selected category does not exist', async () => {
    const localCache = new Map<string, Category>();

    await expect(
      updateCategory(
        'id',
        {
          keywords: [
            {
              id: 'Keyword Id',
              name: 'Keyword Name',
            },
          ],
        },
        localCache,
      ),
    ).rejects.toThrowError();
  });
});

describe('deleteCategory', () => {
  it('should delete the specified category', async () => {
    const localCache = new Map<string, Category>([
      [
        'id',
        {
          id: 'id',
          name: 'Example Name',
          keywords: [],
        },
      ],
    ]);

    await deleteCategory('id', localCache);

    expect(localCache.size).toBe(0);
  });
});
