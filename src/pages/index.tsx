/**
 * # Index Page
 *
 *
 */

import type { FunctionComponent } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { CategoriesGrid } from '~/frontend/widgets/CategoriesGrid';

const IndexPage: FunctionComponent = () => {
  const router = useRouter();

  // mode switch if the search query or hash specifies the view as read only
  const isReadOnly = router.asPath.toLowerCase().includes('readonly');

  return (
    <div className="mx-auto mt-4 mb-8 md:w-1/2">
      <h1 className="text-2xl font-bold text-center">Keyword Manager</h1>
      <p className="px-8 my-8 ">
        This application can help you to organize words. It allows to create categories and define
        associated keywords. By default a new category will include similar words to the name of it.
      </p>
      {!isReadOnly && (
        <p className="px-8 mb-4 -mt-4">
          Link:
          <NextLink href="/?readonly=true">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- attributes defined through parent */}
            <a className="ml-2 underline" target="_blank" rel="noopener">
              read only version (editing disabled)
            </a>
          </NextLink>
        </p>
      )}
      <hr className="border-black" />
      <div className="px-8 mt-8">
        <CategoriesGrid isEditable={isReadOnly ? false : true} />
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
