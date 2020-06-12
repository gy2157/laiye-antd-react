module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:import/typescript',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['', 'react', 'prettier', 'react-hooks', 'babel'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    $: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],

  rules: {
    camelcase: 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false },
    ],
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': 0,
    'react/no-did-update-set-state': 2,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'import/no-cycle': 0,
    'react/no-find-dom-node': 0,
    'no-underscore-dangle': 0,
    'react/sort-comp': 0,
    // for (let i = 0; i < len; i++)
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 0,
    'react/display-name': 0,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    'react/static-property-placement': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks
  },
}
