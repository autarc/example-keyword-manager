/**
 * # Category Row (Test)
 *
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';

import { CategoryRow } from '..';
import { Category } from '~/types';
import { apolloClient } from '~/frontend/graphql/client';

const category: Category = {
  id: 'id',
  name: 'Example Name',
  keywords: [
    {
      id: 'keyword-id-1',
      name: 'Keyword Name 1',
    },
    {
      id: 'keyword-id-2',
      name: 'Keyword Name 2',
    },
  ],
};

describe('CategoriesRow', () => {
  it('should display the category name', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <CategoryRow category={category} isEditable={false} />
      </ApolloProvider>,
    );

    const element = screen.getByText('Example Name');
    expect(element).toBeInTheDocument();
  });

  it('should display an entry for each keyword', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <CategoryRow category={category} isEditable={false} />
      </ApolloProvider>,
    );

    const elements = screen.getAllByRole('listitem');
    expect(elements).toHaveLength(2);
  });

  it('should display a trigger to create a new keyword when it is editable', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <CategoryRow category={category} isEditable={true} />
      </ApolloProvider>,
    );

    const triggerElement = screen.getByRole('button', {
      name: 'Add Keyword',
    });

    expect(triggerElement).toBeInTheDocument();
  });
});
