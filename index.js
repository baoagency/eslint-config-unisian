module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['compat', 'html', 'prettier', 'react', 'import'],
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

    // React
    'jsx-quotes': ['error', 'prefer-double'],

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
