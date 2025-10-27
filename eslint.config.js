import next from 'eslint-config-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules', '.next', 'out'],
  },
  ...next(),
];
