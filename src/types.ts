/**
 * # Types
 *
 *
 */

export type Category = {
  /**
   * Identifier of a category
   */
  id: string;
  /**
   * Label of the category
   */
  name: string;
  /**
   * List of associated keywords
   */
  keywords: Keyword[];
};

export type Keyword = {
  /**
   * Identifier of a keyword
   */
  id: string;
  /**
   * Label of the keyword
   */
  name: string;
};
