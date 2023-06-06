/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  overrides: [
    {
      extends: [
        "airbnb-base",
        "airbnb-typescript/base",
      ],
      files: ['./**/*.{ts,tsx, cjs}'],

      parserOptions: {
        project: './tsconfig.json'
      },
    },
  ],
};
