/* eslint-env node */
module.exports = {
    "env": {
        "node": true,
        "es2020": true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        "no-process-env": 0 
    }
  };