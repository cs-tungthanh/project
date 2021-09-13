module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:css-modules/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'css-modules',
    ],
    rules: {
        'max-len': ['error', { code: 120 }],
        'no-console': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'class-methods-use-this': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
        'react/state-in-constructor': ['warn', 'never'],
        'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
        'import/prefer-default-export': 'off',
        'import/default': 'off',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                mjs: 'never',
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'spaced-comment': ['error', 'always', {
            markers: ['/'],
        }],
        'no-unused-expressions': 'off',
        'no-continue': 'off',
        'react/require-default-props': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        // note you must disable the base rule as it can report incorrect errors
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    overrides: [
        {
            files: [
                '**/*.test.{ts,tsx}',
            ],
            env: {
                jest: true,
            },
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
