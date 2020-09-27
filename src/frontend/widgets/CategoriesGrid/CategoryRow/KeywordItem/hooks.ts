/**
 * # Keyword Item (Hooks)
 *
 *
 */

import { useMutation } from '@apollo/client';
import { useCallback } from 'react';

import type { Category, Keyword } from '~/types';
import type { GetCategoriesData } from '~/frontend/widgets/CategoriesGrid/hooks';
import type { RemoveCategoryKeywordVariables } from '~/backend/models/category';

import schemas from '~/frontend/graphql/category.graphql';

export type UseKeywordItemParams = {
  categoryId: Category['id'];
  keywordId: Keyword['id'];
};

export function useKeywordItem({ categoryId, keywordId }: UseKeywordItemParams) {
  const { removeCategoryKeyword } = useRemoveCategoryKeyword();

  const handleRemoveCategoryKeyword = useCallback(() => {
    return removeCategoryKeyword({
      variables: {
        input: {
          categoryId,
          keywordId,
        },
      },
    });
  }, [categoryId, keywordId]);

  return {
    handleRemoveCategoryKeyword,
  };
}

type RemoveCategoryKeywordData = {
  removeCategoryKeyword: Category;
};

/**
 *
 * @param keywordId -
 */
function useRemoveCategoryKeyword() {
  const [removeCategoryKeyword, { error, loading }] = useMutation<
    RemoveCategoryKeywordData,
    RemoveCategoryKeywordVariables
  >(schemas.RemoveCategoryKeywordMutation, {
    update(cache, result) {
      if (result.data) {
        const data = cache.readQuery<GetCategoriesData>({
          query: schemas.GetCategoriesQuery,
        }) || {
          categories: [],
        };

        const receivedCategory = result.data.removeCategoryKeyword;
        const receivedCategoryId = receivedCategory.id;

        const updatedCategories = data.categories.map((category) => {
          if (category.id === receivedCategoryId) {
            return receivedCategory;
          }
          return category;
        });

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
    removeCategoryKeywordError: error,
    isRemovingCategoryKeyword: loading,
    removeCategoryKeyword,
  };
}
