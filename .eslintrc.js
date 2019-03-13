module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
    'semi': [2, 'never'],
    'quotes': [2, 'single'],
    'object-shorthand': 0,
    'no-console': 0,
    'func-names': 0,
    'quote-props': 0,
    'no-param-reassign': 0,
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'import/prefer-default-export': 0,
    'arrow-body-style': 0,
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'max-len': ['error', { 'code': 500 }],
    'vue/no-parsing-error': 0,
    'no-plusplus': 0,
    'line-breaks': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js','.jsx','.vue'],
      },
    },
  },
}
