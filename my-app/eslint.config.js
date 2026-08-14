import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // 책 예제는 CDN <script>로 React 및 ReactDOM이 전역에 있다.
  // 대조 및 설명용 스니펫이므로 이 폴더에서만 전역으로 인정한다.
  {
    files: ['src/chapters/**/*.{js,jsx}'],
    languageOptions: {
      globals: { React: 'readonly', ReactDOM: 'readonly' },
    },
    // 대조용 스니펫은 어디에도 쓰이지 않는 변수를 선언한 채 두는 것이 정상이다.
    rules: { 'no-unused-vars': 'off' },
  },
]);
