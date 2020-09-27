/**
 * # GraphQL Queries
 *
 * GraphQL DocumentNodes from the defined queries (see: src/frontend/graphql/category.graphql).
 */

module.exports.GetCategoriesQuery = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: {
        kind: 'Name',
        value: 'GetCategoriesQuery',
      },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'categories',
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'CommonCategoryFieldFragment',
                  },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'CommonCategoryFieldFragment',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Category',
        },
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keywords',
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                  },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                  },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1001,
    source: {
      body:
        '#\nfragment CommonCategoryFieldFragment on Category {\n  id\n  name\n  keywords {\n    id\n    name\n  }\n}\n\n#\nquery GetCategoriesQuery {\n  categories {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput CreateCategoryInput {\n  name: String!\n}\n\n#\nmutation CreateCategoryMutation($input: CreateCategoryInput!) {\n  createCategory(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput DeleteCategoryInput {\n  id: ID!\n}\n\n#\nmutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n  deleteCategory(input: $input) # Boolean\n}\n\n#\ninput AddCategoryKeywordInput {\n  categoryId: ID!\n  keywordName: String!\n}\n\n#\nmutation AddCategoryKeywordMutation($input: AddCategoryKeywordInput!) {\n  addCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput RemoveCategoryKeywordInput {\n  categoryId: ID!\n  keywordId: ID!\n}\n\n#\nmutation RemoveCategoryKeywordMutation($input: RemoveCategoryKeywordInput!) {\n  removeCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n',
      name: 'GraphQL request',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
};

module.exports.CreateCategoryMutation = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'CreateCategoryMutation',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'input',
            },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'CreateCategoryInput',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'createCategory',
            },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'input',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'input',
                  },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'CommonCategoryFieldFragment',
                  },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'CommonCategoryFieldFragment',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Category',
        },
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keywords',
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                  },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                  },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1001,
    source: {
      body:
        '#\nfragment CommonCategoryFieldFragment on Category {\n  id\n  name\n  keywords {\n    id\n    name\n  }\n}\n\n#\nquery GetCategoriesQuery {\n  categories {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput CreateCategoryInput {\n  name: String!\n}\n\n#\nmutation CreateCategoryMutation($input: CreateCategoryInput!) {\n  createCategory(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput DeleteCategoryInput {\n  id: ID!\n}\n\n#\nmutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n  deleteCategory(input: $input) # Boolean\n}\n\n#\ninput AddCategoryKeywordInput {\n  categoryId: ID!\n  keywordName: String!\n}\n\n#\nmutation AddCategoryKeywordMutation($input: AddCategoryKeywordInput!) {\n  addCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput RemoveCategoryKeywordInput {\n  categoryId: ID!\n  keywordId: ID!\n}\n\n#\nmutation RemoveCategoryKeywordMutation($input: RemoveCategoryKeywordInput!) {\n  removeCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n',
      name: 'GraphQL request',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
};

module.exports.DeleteCategoryMutation = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'DeleteCategoryMutation',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'input',
            },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'DeleteCategoryInput',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'deleteCategory',
            },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'input',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'input',
                  },
                },
              },
            ],
            directives: [],
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1001,
    source: {
      body:
        '#\nfragment CommonCategoryFieldFragment on Category {\n  id\n  name\n  keywords {\n    id\n    name\n  }\n}\n\n#\nquery GetCategoriesQuery {\n  categories {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput CreateCategoryInput {\n  name: String!\n}\n\n#\nmutation CreateCategoryMutation($input: CreateCategoryInput!) {\n  createCategory(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput DeleteCategoryInput {\n  id: ID!\n}\n\n#\nmutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n  deleteCategory(input: $input) # Boolean\n}\n\n#\ninput AddCategoryKeywordInput {\n  categoryId: ID!\n  keywordName: String!\n}\n\n#\nmutation AddCategoryKeywordMutation($input: AddCategoryKeywordInput!) {\n  addCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput RemoveCategoryKeywordInput {\n  categoryId: ID!\n  keywordId: ID!\n}\n\n#\nmutation RemoveCategoryKeywordMutation($input: RemoveCategoryKeywordInput!) {\n  removeCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n',
      name: 'GraphQL request',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
};

module.exports.AddCategoryKeywordMutation = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'AddCategoryKeywordMutation',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'input',
            },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'AddCategoryKeywordInput',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'addCategoryKeyword',
            },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'input',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'input',
                  },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'CommonCategoryFieldFragment',
                  },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'CommonCategoryFieldFragment',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Category',
        },
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keywords',
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                  },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                  },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1001,
    source: {
      body:
        '#\nfragment CommonCategoryFieldFragment on Category {\n  id\n  name\n  keywords {\n    id\n    name\n  }\n}\n\n#\nquery GetCategoriesQuery {\n  categories {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput CreateCategoryInput {\n  name: String!\n}\n\n#\nmutation CreateCategoryMutation($input: CreateCategoryInput!) {\n  createCategory(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput DeleteCategoryInput {\n  id: ID!\n}\n\n#\nmutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n  deleteCategory(input: $input) # Boolean\n}\n\n#\ninput AddCategoryKeywordInput {\n  categoryId: ID!\n  keywordName: String!\n}\n\n#\nmutation AddCategoryKeywordMutation($input: AddCategoryKeywordInput!) {\n  addCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput RemoveCategoryKeywordInput {\n  categoryId: ID!\n  keywordId: ID!\n}\n\n#\nmutation RemoveCategoryKeywordMutation($input: RemoveCategoryKeywordInput!) {\n  removeCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n',
      name: 'GraphQL request',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
};

module.exports.RemoveCategoryKeywordMutation = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: {
        kind: 'Name',
        value: 'RemoveCategoryKeywordMutation',
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'input',
            },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'RemoveCategoryKeywordInput',
              },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'removeCategoryKeyword',
            },
            arguments: [
              {
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: 'input',
                },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'input',
                  },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'CommonCategoryFieldFragment',
                  },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: {
        kind: 'Name',
        value: 'CommonCategoryFieldFragment',
      },
      typeCondition: {
        kind: 'NamedType',
        name: {
          kind: 'Name',
          value: 'Category',
        },
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'id',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'name',
            },
            arguments: [],
            directives: [],
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'keywords',
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id',
                  },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name',
                  },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1001,
    source: {
      body:
        '#\nfragment CommonCategoryFieldFragment on Category {\n  id\n  name\n  keywords {\n    id\n    name\n  }\n}\n\n#\nquery GetCategoriesQuery {\n  categories {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput CreateCategoryInput {\n  name: String!\n}\n\n#\nmutation CreateCategoryMutation($input: CreateCategoryInput!) {\n  createCategory(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput DeleteCategoryInput {\n  id: ID!\n}\n\n#\nmutation DeleteCategoryMutation($input: DeleteCategoryInput!) {\n  deleteCategory(input: $input) # Boolean\n}\n\n#\ninput AddCategoryKeywordInput {\n  categoryId: ID!\n  keywordName: String!\n}\n\n#\nmutation AddCategoryKeywordMutation($input: AddCategoryKeywordInput!) {\n  addCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n\n#\ninput RemoveCategoryKeywordInput {\n  categoryId: ID!\n  keywordId: ID!\n}\n\n#\nmutation RemoveCategoryKeywordMutation($input: RemoveCategoryKeywordInput!) {\n  removeCategoryKeyword(input: $input) {\n    ...CommonCategoryFieldFragment\n  }\n}\n',
      name: 'GraphQL request',
      locationOffset: {
        line: 1,
        column: 1,
      },
    },
  },
};
