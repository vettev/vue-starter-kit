module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'eslint:recommended'
    ],
    rules: {
        indent: ['warn', 4],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'comma-dangle': ['warn', {
            'arrays': 'only-multiline',
            'objects': 'always',
            'imports': 'never',
            'exports': 'never',
            'functions': 'ignore'
        }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/html-indent': ['warn', 4, {
            'attribute': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
