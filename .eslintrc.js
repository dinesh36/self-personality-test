module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'react/static-property-placement':'off',
    'react/no-unused-state': 'off',
    'no-return-await': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off'
  }
};
