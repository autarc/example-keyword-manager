/**
 * # Categories Grid (Test)
 *
 *
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';

import { CategoriesGrid } from '..';
import { apolloClient } from '~/frontend/graphql/client';

// - data are loaded

// - if 'isEditable' is provided a creation button is there

// - if categories are loaded -> for each entry show a list entry

// - if an error is happening, show the error

describe('CategoriesGrid', () => {
  it('should display an loading indicator while getting categories', async () => {
    // provider
    render(
      <ApolloProvider client={apolloClient}>
        <CategoriesGrid isEditable={false} />
      </ApolloProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('img', {
          hidden: true,
        }),
      ).toBeInTheDocument();
    });
  });

  it('should display a trigger to create a new category when it is editable', async () => {
    render(
      <ApolloProvider client={apolloClient}>
        <CategoriesGrid isEditable={true} />
      </ApolloProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: 'Add Category',
        }),
      ).toBeInTheDocument();
    });
  });
});
