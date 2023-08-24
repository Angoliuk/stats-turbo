require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  ignorePatterns: ['node_modules', 'build/*', 'dist/*', '.eslintrc.cjs', '**/*.d.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'turbo',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};

// module.exports = {
// extends: ['@rushstack/eslint-config/profile/web-app'] // <---- put your profile string here
// parserOptions: { tsconfigRootDir: __dirname }
// }
