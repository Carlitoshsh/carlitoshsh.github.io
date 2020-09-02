module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically
      // detect the version of React to use
      version: 'detect',
    },
  },
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2, // No any
    semi: [2, 'never'], // Removing semicolon
    quotes: [2, 'single', { avoidEscape: true }], // Single quotes over double
    indent: ['error', 2], // Tab width 2 spaces
    'eol-last': ['error', 'always'], // end of line required
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'max-len': ['error', { code: 80 }], // Max line length 80
    'no-debugger': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    curly: ['error', 'multi-or-nest'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
}
