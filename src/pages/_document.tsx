/**
 * # Document (Next.js)
 *
 * See: https://nextjs.org/docs/advanced-features/custom-document
 */

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import faviconImage from '~/frontend/assets/favicon.ico';

class CustomDocument extends Document {
  public render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta httpEquiv="content-type" content="text/html, charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <link rel="icon" href={faviconImage} />
        </Head>
        <body>
          <div className="min-h-screen bg-gray-100 border-8 border-green-600">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default CustomDocument;
