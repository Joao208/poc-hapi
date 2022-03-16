module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'func-names': 'off',
  },
}
