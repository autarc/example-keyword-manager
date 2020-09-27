/**
 * # Categories Row (Hooks)
 *
 *
 */

import { useMutation } from '@apollo/client';
import { useCallback } from 'react';

import type { Category } from '~/types';
import type { GetCategoriesData } from '~/frontend/widgets/CategoriesGrid/hooks';
import type {
  DeleteCategoryVariables,
  AddCategoryKeywordVariables,
} from '~/backend/models/category';

import schemas from '~/frontend/graphql/category.graphql';

type UseCategoryRowParams = {
  categoryId: Category['id'];
};

export function useCategoryRow({ categoryId }: UseCategoryRowParams) {
  const { deleteCategory } = useDeleteCategory(categoryId);
  const { addCategoryKeyword } = useAddCategoryKeyword();

  const handleDeleteCategory = useCallback(() => {
    return deleteCategory({
      variables: {
        input: {
          id: categoryId,
        },
      },
    });
  }, [categoryId]);

  const handleAddCategoryKeyword = useCallback((name: string) => {
    return addCategoryKeyword({
      variables: {
        input: {
          categoryId,
          keywordName: name,
        },
      },
    });
  }, []);

  return {
    handleDeleteCategory,
    handleAddCategoryKeyword,
  };
}

type DeleteCategoryData = {
  deleteCategory: boolean;
};

/**
 *
 * @param categoryId -
 */
function useDeleteCategory(categoryId: Category['id']) {
  const [deleteCategory, { error, loading }] = useMutation<
    DeleteCategoryData,
    DeleteCategoryVariables
  >(schemas.DeleteCategoryMutation, {
    update(cache, result) {
      if (result.data) {
        const data = cache.readQuery<GetCategoriesData>({
          query: schemas.GetCategoriesQuery,
        }) || {
          categories: [],
        };

        const updatedCategories = data.categories.filter((category) => {
          return category.id !== categoryId;
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
    deleteCategoryError: error,
    isDeletingCategory: loading,
    deleteCategory,
  };
}

type AddCategoryKeywordData = {
  addCategoryKeyword: Category;
};

/**
 *
 */
function useAddCategoryKeyword() {
  const [addCategoryKeyword, { error, loading }] = useMutation<
    AddCategoryKeywordData,
    AddCategoryKeywordVariables
  >(schemas.AddCategoryKeywordMutation, {
    update(cache, result) {
      if (result.data) {
        const data = cache.readQuery<GetCategoriesData>({
          query: schemas.GetCategoriesQuery,
        }) || {
          categories: [],
        };

        const receivedCategory = result.data.addCategoryKeyword;
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
    addCategoryKeywordError: error,
    isAddingCategoryKeyword: loading,
    addCategoryKeyword,
  };
}
