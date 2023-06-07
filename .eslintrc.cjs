/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  root: true,
  overrides: [
    {
      extends: ["airbnb-base", "airbnb-typescript/base"],
      files: ["./**/*.{ts,tsx, cjs}"],
      // rules: {
      //   'max-len': ['error', 100, 2, {
      //     ignoreUrls: true,
      //     ignoreComments: false,
      //     ignoreRegExpLiterals: true,
      //     ignoreStrings: true,
      //     ignoreTemplateLiterals: true,
      //   }]
      // },

      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};
