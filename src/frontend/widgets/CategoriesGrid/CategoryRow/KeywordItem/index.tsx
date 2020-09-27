/**
 * # Keyword Item
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';

import type { UseKeywordItemParams } from './hooks';
import type { Keyword } from '~/types';
import { useKeywordItem } from './hooks';
import { InteractiveLabel } from '~/frontend/components/InteractiveLabel';

type KeywordItemProps = Pick<UseKeywordItemParams, 'categoryId'> & {
  keyword: Keyword;
  isEditable: boolean;
};

export const KeywordItem: FunctionComponent<KeywordItemProps> = ({
  categoryId,
  keyword,
  isEditable,
}) => {
  const { handleRemoveCategoryKeyword } = useKeywordItem({
    categoryId,
    keywordId: keyword.id,
  });

  return (
    <InteractiveLabel onDelete={isEditable ? handleRemoveCategoryKeyword : undefined}>
      {keyword.name}
    </InteractiveLabel>
  );
};
