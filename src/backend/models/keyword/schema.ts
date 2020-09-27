/**
 * # Keyword (Schema)
 *
 *
 */

import { objectType } from '@nexus/schema';

export const KeywordSchema = objectType({
  name: 'Keyword',
  definition(t) {
    t.string('id', {
      description: 'Unique identifier of the keyword',
    });
    t.string('name', {
      description: 'Label of the keyword',
    });
  },
});
