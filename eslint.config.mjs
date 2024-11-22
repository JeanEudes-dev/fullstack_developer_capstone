// eslint.config.mjs
export default {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'nodes_modules',
  },
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['frontend/**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2024,
        sourceType: 'node_modules',
      },
      // extends: ['eslint:recommended', 'plugin:react/recommended'],
      env: {
        browser: true,
      },
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['database/**/*.{js,ts}'],
      languageOptions: {
        ecmaVersion: 2024,
        sourceType: 'node_modules',
      },
      // extends: ['eslint:recommended'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
