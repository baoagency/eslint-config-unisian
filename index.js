module.exports = {
  extends: [
    'prettier',
    'prettier/standard',
    'standard',
    'plugin:compat/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['compat', 'html', 'prettier'],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'no-new': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error'],
    'prefer-template': ['error'],
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'no-unused-vars': ['error']
  },
  globals: {
    document: true,
    window: true
  }
}
