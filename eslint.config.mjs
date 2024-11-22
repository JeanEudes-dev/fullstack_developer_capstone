// eslint.config.js
module.exports = {
  root: true, // Marks the project as the root of the ESLint config
  parserOptions: {
    ecmaVersion: 'latest', // Supports the latest ECMAScript features
    sourceType: 'module',  // Supports ES Modules
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    node: true,  // Enable Node.js global variables for the server
    browser: true, // Enable browser global variables for the client
  },
  overrides: [
    {
      // React-specific settings
      files: ['frontend/**/*.{js,jsx,ts,tsx}'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // if using TypeScript
      ],
      env: {
        browser: true, // React runs in the browser
      },
      rules: {
        'react/prop-types': 'off', // Customize React-specific rules
      },
    },
    {
      // Express.js-specific settings
      files: ['database/**/*.{js,ts}'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // If using TypeScript
      ],
      env: {
        node: true, // Express runs on Node.js
      },
      rules: {
        'no-console': 'warn', // Customize Express-specific rules
      },
    },
  ],
};
