import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends('eslint:recommended'), {
  plugins: {
    '@stylistic/js': stylisticJs
  },

  languageOptions: {
    globals: {
      ...globals.browser
    },

    ecmaVersion: 2020,
    sourceType: 'module'
  },

  rules: {
    'no-console': 'warn',
    'block-scoped-var': 'warn',
    'dot-notation': 'warn',
    'no-unused-vars': 'warn',

    '@stylistic/js/array-bracket-spacing': 'warn',
    '@stylistic/js/brace-style': 'warn',
    '@stylistic/js/no-multi-spaces': 'warn',
    '@stylistic/js/comma-spacing': 'warn',
    '@stylistic/js/indent': ['error', 2, {
      SwitchCase: 1
    }],
    '@stylistic/js/comma-dangle': 'error',
    '@stylistic/js/eol-last': 'error',

    '@stylistic/js/key-spacing': 'warn',
    '@stylistic/js/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/js/no-trailing-spaces': 'warn',

    '@stylistic/js/quote-props': ['error', 'as-needed', {
      keywords: true
    }],

    '@stylistic/js/quotes': ['warn', 'single'],
    '@stylistic/js/semi': ['error', 'always'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'always'],
    'space-infix-ops': 'warn'
  }
}];

