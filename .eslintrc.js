export const root = true;
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaVersion: 2020, // Use the latest ecmascript standard
  sourceType: 'module', // Allows using import/export statements
  ecmaFeatures: {
    jsx: true // Enable JSX since we're using React
  }
};
export const settings = {
  react: {
    version: 'detect' // Automatically detect the react version
  }
};
export const env = {
  browser: true, // Enables browser globals like window and document
  amd: true, // Enables require() and define() as global variables as per the amd spec.
  node: true // Enables Node.js global variables and Node.js scoping.
};
export const eslintExtends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
];
export const rules = {
  'rule-name': 'off',
  // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 0,
  '@typescript-eslint/explicit-function-return-type': 'off',
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton']
    }
  ] // Use our .prettierrc file as source
};
