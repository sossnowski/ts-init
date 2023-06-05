"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env node */
module.exports = {
    env: {
        node: true,
        es2020: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: "./tsconfig.json",
        // tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
        "no-process-env": 0
    },
};
//# sourceMappingURL=.eslintrc.cjs.map