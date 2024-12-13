import globals from 'globals';
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
  plugins: {},

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
    'no-multi-spaces': 'warn',
    'no-unused-vars': 'warn',
    'array-bracket-spacing': 'warn',
    'brace-style': 'warn',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'warn',
    'eol-last': 'error',

    indent: ['error', 2, {
      SwitchCase: 1
    }],

    'key-spacing': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-trailing-spaces': 'warn',

    'quote-props': ['error', 'as-needed', {
      keywords: true
    }],

    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'warn',
    'space-infix-ops': 'warn'
  }
}];

