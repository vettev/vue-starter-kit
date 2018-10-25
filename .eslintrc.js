module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['warn', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'vue/html-indent': ['error', 4]
    },
    overrides: {
        files: ['*.vue'],
        rules: {
            indent: 'off'
        }
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
