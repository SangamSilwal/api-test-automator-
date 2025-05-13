// eslint.config.js
import tsEslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
  {
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/*.md'
    ]
  },
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-console': 'warn'
    }
  },
  prettierConfig
);