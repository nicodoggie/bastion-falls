const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  printWidth: 80,
  proseWrap: 'always',
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        htmlWhitespaceSensitivity: 'css',
        tabWidth: 1,
      },
    },
  ],
};

export default config;
