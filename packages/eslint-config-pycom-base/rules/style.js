module.exports = {
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'max-len': ['error', {
            'code': 140
        }],
        'no-console': ['error', {
            'allow': ['warn', 'error', 'log']
        }],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline'
            }
        ],
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
    }
};
