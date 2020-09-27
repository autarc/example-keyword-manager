/**
 * # Categories Grid (Hooks)
 *
 *
 */

import { useQuery, useMutation } from '@apollo/client';
import { useCallback } from 'react';

import type { Category } from '~/types';
import type { CreateCategoryVariables } from '~/backend/models/category';

import schemas from '~/frontend/graphql/category.graphql';

export function useCategoriesGrid() {
  const { createCategory } = useCreateCategory();

  const handleCreateCategory = useCallback((name: string) => {
    return createCategory({
      variables: {
        input: {
          name,
        },
      },
    });
  }, []);

  return {
    ...useGetCategories(),
    handleCreateCategory,
  };
}

export type GetCategoriesData = {
  /**
   *
   */
  categories: Category[];
};

/**
 *
 */
function useGetCategories() {
  const { error, loading, data } = useQuery<GetCategoriesData>(schemas.GetCategoriesQuery);

  return {
    getCategoriesError: error,
    isGettingCategories: loading,
    categories: data ? data.categories : [],
  };
}

type CreateCategoryData = {
  /**
   *
   */
  createCategory: Category;
};

/**
 *
 */
function useCreateCategory() {
  const [createCategory, { error, loading }] = useMutation<
    CreateCategoryData,
    CreateCategoryVariables
  >(schemas.CreateCategoryMutation, {
    update(cache, result) {
      if (result.data) {
        const data = cache.readQuery<GetCategoriesData>({
          query: schemas.GetCategoriesQuery,
        }) || {
          categories: [],
        };

        const updatedCategories = [...data.categories, result.data.createCategory];

        cache.writeQuery<GetCategoriesData>({
          query: schemas.GetCategoriesQuery,
          data: {
            categories: updatedCategories,
          },
        });
      }
    },
  });

  return {
    createCategoryError: error,
    isCreatingCategory: loading,
    createCategory,
  };
}
