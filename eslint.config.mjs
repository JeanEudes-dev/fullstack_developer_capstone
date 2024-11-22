export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Add browser globals
        window: true,
        document: true,
        navigator: true,
        // Add Node.js globals
        require: true,
        module: true,
        process: true,
        __dirname: true,
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  
  {
    files: ['frontend/**/*.{js,jsx,ts,tsx}'],
    ...reactRecommended,
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'node-modules',
      globals: {
        React: true,
      },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
  // Specific rules for server files
  {
    files: ['backend/**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'node_modules',
      globals: {
        module: true,
        exports: true,
      },
    },
    rules: {
      'no-console': 'warn',
    },
  },
];
