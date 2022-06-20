const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }).concat(
    '**/test/**',
    '**/package/**'
  ),
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:tailwind/recommended',
  ],
  plugins: ['vue'],
  rules: {
    'vue/no-v-html': 'off',
    'no-unexpected-multiline': 'off',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
    },
  ],
}
