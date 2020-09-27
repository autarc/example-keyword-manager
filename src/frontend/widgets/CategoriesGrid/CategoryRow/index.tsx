/**
 * # Category Row
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import type { Category } from '~/types';
import { useCategoryRow } from './hooks';
import { InteractiveLabel } from '~/frontend/components/InteractiveLabel';
import { InlineForm } from '~/frontend/components/InlineForm';
import { ActionButtonContent } from '~/frontend/components/ActionButton';
import { KeywordItem } from './KeywordItem';

type CategoryRowProps = {
  category: Category;
  isEditable: boolean;
};

export const CategoryRow: FunctionComponent<CategoryRowProps> = ({ category, isEditable }) => {
  const { handleDeleteCategory, handleAddCategoryKeyword } = useCategoryRow({
    categoryId: category.id,
  });

  return (
    <div className="flex">
      <div className="w-1/3 p-3">
        <InteractiveLabel onDelete={isEditable ? handleDeleteCategory : undefined}>
          <span className="font-bold">{category.name}</span>
        </InteractiveLabel>
      </div>
      <div className="w-2/3 p-3 border-l border-gray-500">
        <ul className="list-disc">
          {category.keywords.map((keyword) => (
            <li className="py-1 ml-8" key={keyword.id}>
              <KeywordItem categoryId={category.id} keyword={keyword} isEditable={isEditable} />
            </li>
          ))}
        </ul>
        {isEditable && (
          <div className="mt-4 mb-2 ml-2">
            <InlineForm
              triggerContent={
                <ActionButtonContent
                  iconProps={{
                    icon: faPlusSquare,
                  }}
                >
                  Add Keyword
                </ActionButtonContent>
              }
              fieldName="keywordName"
              onSubmit={handleAddCategoryKeyword}
              inputProps={{
                placeholder: 'New keyword',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
