/**
 * # Keyword Item (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';

import { KeywordItem } from '..';
import { Keyword } from '~/types';
import { apolloClient } from '~/frontend/graphql/client';

const categoryId = 'category-id';
const keyword: Keyword = {
  id: 'id',
  name: 'Example Name',
};

describe('KeywordItem', () => {
  it('should display the keyword name', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <KeywordItem categoryId={categoryId} keyword={keyword} isEditable={false} />
      </ApolloProvider>,
    );

    const element = screen.getByText('Example Name');
    expect(element).toBeInTheDocument();
  });

  it('should display a trigger to delete the keyword when it is editable', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <KeywordItem categoryId={categoryId} keyword={keyword} isEditable={true} />
      </ApolloProvider>,
    );

    const triggerElement = screen.getByRole('button', {
      name: 'Delete',
    });

    expect(triggerElement).toBeInTheDocument();
  });
});
