/**
 * # API - Graphql
 *
 * GraphiQL: http://localhost:10000/api/graphql
 */

import { ApolloServer } from 'apollo-server-micro';
import { makeSchema } from '@nexus/schema';

import {
  CreateCategoryInputSchema,
  DeleteCategoryInputSchema,
  AddCategoryKeywordInputSchema,
  RemoveCategoryKeywordInputSchema,
  CategorySchema,
  MutationSchema as CategoryMutationSchema,
  QuerySchema as CategoryQuerySchema,
} from '~/backend/models/category';
import { KeywordSchema } from '~/backend/models/keyword';

const apolloServer = new ApolloServer({
  schema: makeSchema({
    shouldGenerateArtifacts: false,
    outputs: false,
    nonNullDefaults: {
      output: true,
      input: true,
    },
    types: [
      CreateCategoryInputSchema,
      DeleteCategoryInputSchema,
      AddCategoryKeywordInputSchema,
      RemoveCategoryKeywordInputSchema,
      CategorySchema,
      KeywordSchema,
      CategoryMutationSchema,
      CategoryQuerySchema,
    ],
  }),
});

const handler = apolloServer.createHandler({
  path: '/api/graphql',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// eslint-disable-next-line import/no-default-export
export default handler;
