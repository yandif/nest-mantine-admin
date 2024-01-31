module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'mantine',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'eol-last': ['error', 'always'], // 文件以换行符结尾
    'react/react-in-jsx-scope': 'off', // 不需要手动导入React
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1, // 文件中
        maxEOF: 1, // 文件末尾
        maxBOF: 0, //文件开头
      },
    ], // 控制多个空行
    'simple-import-sort/imports': 'error', // 导入排序规则
    'simple-import-sort/exports': 'error', // 导出排序规则
    'no-plusplus': 'off',
  },
};
