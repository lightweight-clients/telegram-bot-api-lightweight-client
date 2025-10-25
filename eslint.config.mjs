import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const commonRules = {
  '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  indent: ['error', 2],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-trailing-spaces': 'error',
  'eol-last': ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],
  'key-spacing': ['error', {beforeColon: false, afterColon: true}],
  'space-before-blocks': ['error', 'always'],
  'space-infix-ops': 'error',
  'spaced-comment': ['error', 'always', {exceptions: ['-', '+']}],
  'arrow-spacing': ['error', {before: true, after: true}],
  'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
  'keyword-spacing': ['error', {before: true, after: true}],
  'prefer-const': 'error',
  'no-var': 'error',
  'prefer-arrow-callback': 'error',
  'arrow-body-style': ['error', 'as-needed'],
};

export default [
  // Ignore patterns
  {
    ignores: ['**/*.md', '**/node_modules', '**/dist'],
  },

  // Base JS + TS recommended configs
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ),

  // File-specific config for TypeScript
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...commonRules,
      'no-console': 'error',
    },
  },

  // File-specific config for TypeScript
  {
    files: ['tests/**/*.ts', 'src/generator/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: commonRules,
  },
];
