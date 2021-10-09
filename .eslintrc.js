module.exports = {
  extends: ['plugin:react/recommended', 'plugin:import/recommended', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'import'],
  rules: {
    eqeqeq: ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'unused-vars': 'warn',
    'arrow-parens': ['off', 'always'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': ['off', 'never'],
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-curly-spacing': [
      'warn',
      {
        attributes: { when: 'never' },
        children: { when: 'never' },
        allowMultiline: true,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
