module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: 0,
    semi: 0,
    'no-console': 1,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
