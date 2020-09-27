/**
 * # Custom
 *
 * See: https://webpack.js.org/guides/typescript/#importing-other-assets
 *      https://github.com/mrmckeb/typescript-plugin-css-modules#custom-definitions
 */

declare module '*.module.css' {
  const selectors: Record<string, string>;

  // eslint-disable-next-line import/no-default-export
  export default selectors;
}

declare module '*.ico' {
  const content: string;

  // eslint-disable-next-line import/no-default-export
  export default content;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';

  const schemas: Record<string, DocumentNode>;

  export = schemas;
}
