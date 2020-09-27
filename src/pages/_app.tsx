/**
 * # App (Next.js)
 *
 * See: https://nextjs.org/docs/advanced-features/custom-app
 */

import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '~/frontend/graphql/client';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '~/frontend/design/global.css';

// prevent auto loading styles: https://github.com/FortAwesome/react-fontawesome#nextjs
config.autoAddCss = false;

const App: FunctionComponent<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Keyword Manager</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} key={router.asPath} />
      </ApolloProvider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
