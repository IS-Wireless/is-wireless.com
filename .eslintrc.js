const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }).concat(
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/package/**'
  ),
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:tailwind/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['vue', 'jest'],
  rules: {
    'vue/no-v-html': 'off',
    'no-unexpected-multiline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
}
