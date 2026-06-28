import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Config files run in Node, so expose Node globals (process, etc.) to avoid no-undef.
    files: ['**/*.config.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  {
    ignores: ['dist/**', '.next/**', 'node_modules/**'],
  }
);
