/**
 * # Category (Schema)
 *
 *
 */

import { objectType, inputObjectType, extendType, arg } from '@nexus/schema';

import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from './storage';
import { findOrCreateKeyword } from '~/backend/models/keyword';

export const CategorySchema = objectType({
  name: 'Category',
  definition(t) {
    t.string('id', {
      description: 'Unique identifier of the category',
    });
    t.string('name', {
      description: 'Label of the category',
    });
    t.list.field('keywords', {
      type: 'Keyword',
      description: 'List of associated keywords',
    });
  },
});

export const QuerySchema = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('categories', {
      type: 'Category',
      description: 'All available categories',
      resolve() {
        return getCategories();
      },
    });
  },
});

export type DeleteCategoryVariables = {
  input: {
    id: string;
  };
};

export const DeleteCategoryInputSchema = inputObjectType({
  name: 'DeleteCategoryInput',
  definition(t) {
    t.id('id', {
      description: 'Identifier of the category',
      required: true,
    });
  },
});

export type AddCategoryKeywordVariables = {
  input: {
    categoryId: string;
    keywordName: string;
  };
};

export const AddCategoryKeywordInputSchema = inputObjectType({
  name: 'AddCategoryKeywordInput',
  definition(t) {
    t.id('categoryId', {
      description: 'Identifier of the category',
      required: true,
    });
    t.string('keywordName', {
      description: 'Label of the keyword',
      required: true,
    });
  },
});

export type RemoveCategoryKeywordVariables = {
  input: {
    categoryId: string;
    keywordId: string;
  };
};

export const RemoveCategoryKeywordInputSchema = inputObjectType({
  name: 'RemoveCategoryKeywordInput',
  definition(t) {
    t.id('categoryId', {
      description: 'Identifier of the category',
      required: true,
    });
    t.string('keywordId', {
      description: 'Identifier of the keyword',
      required: true,
    });
  },
});

export type CreateCategoryVariables = {
  input: {
    name: string;
  };
};

export const CreateCategoryInputSchema = inputObjectType({
  name: 'CreateCategoryInput',
  definition(t) {
    t.string('name', {
      description: 'Unique label of the new category',
      required: true,
    });
  },
});

export const MutationSchema = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createCategory', {
      type: 'Category',
      args: {
        input: arg({
          // CreateCategoryVariables
          type: 'CreateCategoryInput',
          required: true,
        }),
      },
      resolve(_root, args: CreateCategoryVariables) {
        const { name } = args.input;

        return createCategory(name);
      },
    });

    t.field('deleteCategory', {
      type: 'Boolean',
      args: {
        input: arg({
          // DeleteCategoryVariables
          type: 'DeleteCategoryInput',
          required: true,
        }),
      },
      async resolve(_root, args: DeleteCategoryVariables) {
        const { id } = args.input;

        await deleteCategory(id);

        return true;
      },
    });

    t.field('addCategoryKeyword', {
      type: 'Category',
      description: 'Add an associated keyword to a category',
      args: {
        input: arg({
          // AddCategoryKeywordVariables
          type: 'AddCategoryKeywordInput',
          required: true,
        }),
      },
      async resolve(_root, args: AddCategoryKeywordVariables) {
        const { categoryId, keywordName } = args.input;

        const category = await getCategory(categoryId);

        const hasAlreadyMatchingKeywordName = category.keywords.some((keyword) => {
          return keyword.name === keywordName;
        });
        if (hasAlreadyMatchingKeywordName) {
          throw new Error(`The category has already a keyword with the name "${keywordName}"!`);
        }

        const additionalKeyword = await findOrCreateKeyword(keywordName);

        const updatedCategoryKeywords = [...category.keywords, additionalKeyword];

        return updateCategory(category.id, {
          keywords: updatedCategoryKeywords,
        });
      },
    });

    t.field('removeCategoryKeyword', {
      type: 'Category',
      description: 'Remove an associated keyword from a category',
      args: {
        input: arg({
          // RemoveCategoryKeywordVariables
          type: 'RemoveCategoryKeywordInput',
          required: true,
        }),
      },
      async resolve(_root, args: RemoveCategoryKeywordVariables) {
        const { categoryId, keywordId } = args.input;

        const category = await getCategory(categoryId);

        const updatedCategoryKeywords = category.keywords.filter((keyword) => {
          return keyword.id !== keywordId;
        });

        return updateCategory(category.id, {
          keywords: updatedCategoryKeywords,
        });
      },
    });
  },
});
