module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'max-len': [0, 120, 4],
    'react-hooks/rules-of-hooks': 'off',
    'react/no-array-index-key': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
  globals: {
    rootPath: true,
    sessionKeyPrefix: true,
  },
};
