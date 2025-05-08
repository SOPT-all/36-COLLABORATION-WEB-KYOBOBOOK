import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    ignores: ['node_modules', 'dist', 'dist-ssr'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      'no-console': 'warn', // 콘솔 사용 경고
      'no-unused-vars': 'off', // 변수는 선언했지만 사용하지 않았을 때 경고
      '@typescript-eslint/no-unused-vars': 'warn', // TS 전용으로만 사용
      curly: 'error', // if/for 등에 항상 중괄호 사용
      // import 정렬
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'react/self-closing-comp': 'warn', // JSX 안에 content가 없을 경우 self-closing 강제
      '@typescript-eslint/no-explicit-any': 'warn', // TS: any 사용 금지
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
