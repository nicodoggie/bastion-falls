import pluginJson from '@eslint/json';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJson.configs.recommended,
  {
    files: ['**/*.jsonld'],
    plugins: { json: pluginJson },
    language: 'json/json',
    ...pluginJson.configs.recommended,
  },
];
