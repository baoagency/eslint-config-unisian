module.exports = {
  extends: [
    'prettier',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['compat', 'html', 'prettier', 'import'],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'no-new': ['error'],
    'no-unused-vars': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error'],
    'prefer-template': ['error'],

    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // Import
    'import/no-default-export': ['error'],
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        ['internal', 'parent'],
        'sibling',
      ],
      'newlines-between': 'always'
    }],
  },
  globals: {
    document: true,
    window: true
  }
}
