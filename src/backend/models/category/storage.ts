/**
 * # Category (Storage)
 *
 *
 */

import { ulid } from 'ulid';

import type { Category } from '~/types';
import { getSimilarMeaningWords } from '~/backend/services/datamuse';
import { findOrCreateKeyword } from '~/backend/models/keyword';

/**
 * Local in-memory cache
 */
const categoryCache = new Map<string, Category>();

/**
 * Create and persist a new category
 *
 * @param name    - label of the category
 * @param [cache] - persisting data structure
 */
export async function createCategory(name: string, cache = categoryCache) {
  const existingCategory = await findCategoryByName(name, cache);
  if (existingCategory) {
    throw new Error(`A category with the name "${name}" already exist!`);
  }

  const similarMeaningWords = await getSimilarMeaningWords(name);

  const initialKeywords = await Promise.all(
    similarMeaningWords.map((word) => findOrCreateKeyword(word.word)),
  );

  const category: Category = {
    id: ulid(),
    name,
    keywords: initialKeywords,
  };

  cache.set(category.id, category);

  return Promise.resolve(category);
}

/**
 * Retrieve a persisted category by its name
 *
 * @param name    - label of a category
 * @param [cache] - persisting data structure
 */
export function findCategoryByName(name: string, cache = categoryCache) {
  for (const category of cache.values()) {
    if (category.name === name) {
      return Promise.resolve(category);
    }
  }

  return Promise.resolve(null);
}

/**
 * Update a persisted category
 *
 * @param id      - identifier of a category
 * @param fields  - updated fields of a category
 * @param [cache] - persisting data structure
 */
export async function updateCategory(
  id: string,
  fields: Partial<Omit<Category, 'id'>>,
  cache = categoryCache,
) {
  const category = await getCategory(id, cache);

  const updatedCategory: Category = {
    ...category,
    ...fields,
  };

  cache.set(category.id, updatedCategory);

  return updatedCategory;
}

/**
 * Retrieve a persisted category
 *
 * @param id      - identifier of a category
 * @param [cache] - persisting data structure
 */
export function getCategory(id: string, cache = categoryCache) {
  const category = cache.get(id);

  if (!category) {
    throw new Error(`A category with the id "${id}" does not exist!`);
  }

  return Promise.resolve(category);
}

/**
 * Retrieve all persisted categories
 *
 * @param [cache] - persisting data structure
 */
export function getCategories(cache = categoryCache) {
  const categories: Category[] = [];

  for (const category of cache.values()) {
    categories.push(category);
  }

  return Promise.resolve(categories);
}

/**
 * Delete a persisted category
 *
 * @param id      - identifier of the category
 * @param [cache] - persisting data structure
 */
export function deleteCategory(id: string, cache = categoryCache) {
  cache.delete(id);

  return Promise.resolve(null);
}
