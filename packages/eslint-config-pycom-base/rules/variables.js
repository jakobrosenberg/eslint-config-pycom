module.exports = {
    rules: {

        'no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'none',
            'ignoreRestSiblings': false,
            'argsIgnorePattern': '^_'
        }],

    }
};
