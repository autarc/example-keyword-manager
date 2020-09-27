/**
 * # Categories Grid
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { useCategoriesGrid } from './hooks';
import { LoadingIndicator } from '~/frontend/components/LoadingIndicator';
import { ActionButtonContent } from '~/frontend/components/ActionButton';
import { InlineForm } from '~/frontend/components/InlineForm';
import { ErrorMessage } from '~/frontend/components/ErrorMessage';

import { CategoryRow } from './CategoryRow';

type CategoriesGridProps = {
  /**
   * Flag to define if the component can be edited
   */
  isEditable: boolean;
};

export const CategoriesGrid: FunctionComponent<CategoriesGridProps> = ({ isEditable }) => {
  const {
    isGettingCategories,
    getCategoriesError,
    categories,
    handleCreateCategory,
  } = useCategoriesGrid();

  if (isGettingCategories) {
    return (
      <div className="text-6xl text-center">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <>
      <ErrorMessage error={getCategoriesError} />
      <div className="flex w-full text-center">
        <div className="w-1/3 px-3 py-3 border border-r-0 border-gray-500">Categories</div>
        <div className="w-2/3 px-3 py-3 border border-gray-500">Keywords</div>
      </div>
      <ul>
        {categories.map((category) => (
          <li className="border border-t-0 border-gray-500" key={category.id}>
            <CategoryRow category={category} isEditable={isEditable} />
          </li>
        ))}
      </ul>
      {isEditable && (
        <div className="my-16 ml-3">
          <InlineForm
            triggerContent={
              <ActionButtonContent
                iconProps={{
                  icon: faPlusSquare,
                }}
              >
                Add Category
              </ActionButtonContent>
            }
            fieldName="categoryName"
            onSubmit={handleCreateCategory}
            inputProps={{
              placeholder: 'New category name',
            }}
          />
        </div>
      )}
    </>
  );
};
