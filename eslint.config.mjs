// eslint.config.mjs
export default {
  root: true,
  parserOptions: {
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
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      env: {
        browser: true,
      },
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['database/**/*.{js,ts}'],
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'node_modules',
      },
      extends: ['eslint:recommended'],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
