module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },

    rules: {
        'arrow-parens': ['error', 'always'],
    }
};
