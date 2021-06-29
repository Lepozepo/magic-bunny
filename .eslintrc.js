const prettierConfig = require('./.prettierrc');

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  rules: {
    'no-underscore-dangle': 0,
    'max-len': [
      'error',
      prettierConfig.printWidth,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  env: {
    node: true,
  },
  ignorePatterns: ['./pkg/**/*'],
};
