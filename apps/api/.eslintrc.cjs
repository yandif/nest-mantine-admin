/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: ['@repo/config-eslint/nest.js'],
};
