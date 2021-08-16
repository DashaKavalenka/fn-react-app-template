module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', '@typescript-eslint', 'jest'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'jsx-a11y/img-has-alt': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-empty-function': 'warn',
    'no-duplicate-imports': 'warn',
    'no-dupe-class-members': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-use-before-define': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 0,
    'require-await': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-no-duplicate-props': [1, { ignoreCase: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    curly: ['error', 'all'],
  },
};
