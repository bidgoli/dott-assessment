module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:import/warnings',
        'plugin:import/typescript', // Plugin for the imports
        'plugin:jsdoc/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['filenames', 'folders', 'jsdoc'],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    root: true,
    ignorePatterns: ['build', 'node_modules', 'client_lib'],
    rules: {
        // Errors created by prettier show as warnings
        'prettier/prettier': 'warn',

        // We enforce the import order to be external -> <newline> -> internal
        'import/order': [
            'warn',
            {
                groups: ['external'],
                alphabetize: { order: 'ignore' },
                'newlines-between': 'always',
            },
        ],

        // Never use console directly, always use the logger
        'no-console': 'warn',

        // If we define variables but we dont use them, their names should start with an underscore
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_' }],

        // Do not use sequences, this could be confusing (and therefore cause bugs)
        'no-sequences': 'warn',

        // Dont use magic numbers, put them in a constant explaining its meaning
        '@typescript-eslint/no-magic-numbers': [
            'warn',
            {
                ignoreArrayIndexes: true,
                ignoreReadonlyClassProperties: true,
                ignoreEnums: true,
                ignore: [-1, 0, 1, 2, 10, 100, 1000, 24, 60, 3600, 180, 360],
            },
        ],

        // Using non-camelcase names is a warning (by default this is an error)
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase'],
            },

            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },

            {
                selector: 'typeAlias',
                format: ['PascalCase'],
            },

            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            },

            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },

            {
                selector: 'memberLike',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },

            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },

            {
                selector: 'enum',
                format: ['PascalCase'],
            },

            {
                selector: 'enumMember',
                format: ['PascalCase', 'UPPER_CASE'],
            },
        ],

        // All functions should specify their return type, unless they are anonymous lambda expressions
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],

        // Allow use before define, as long as the TS compiler does not complain
        '@typescript-eslint/no-use-before-define': 'off',

        // Enforce that comments always have whitespace above them (unless at the start of a block)
        // and that they always start with a capital letter
        'capitalized-comments': [
            'warn',
            'always',
            {
                ignoreConsecutiveComments: true,
            },
        ],
        'lines-around-comment': [
            'off',
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
                allowClassStart: true,
                allowClassEnd: true,
            },
        ],

        // Detect when return values are discarded
        '@typescript-eslint/no-unused-expressions': 'warn',
        'no-unused-expressions': 'off',

        // Make sure we use === instead of ==
        eqeqeq: 'warn',

        // Enforce a single style for using curly braces
        'brace-style': [
            'warn',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],

        // Enforce consistent file and folder naming
        'filenames/match-regex': ['warn', '^\\.?[a-z][a-z_]*$'],
        'folders/match-regex': ['warn', '^[a-z][a-z_]*$', 'src/'],

        // Make sure all function declarations have documentation
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/no-types': 'warn',
        'jsdoc/check-tag-names': [
            'warn',
            {
                definedTags: [
                    'api',
                    'apiDefine',
                    'apiDeprecated',
                    'apiDescription',
                    'apiError',
                    'apiErrorExample',
                    'apiGroup',
                    'apiHeader',
                    'apiHeaderExample',
                    'apiIgnore',
                    'apiName',
                    'apiParam',
                    'apiParamExample',
                    'apiPermission',
                    'apiPrivate',
                    'apiSampleRequest',
                    'apiSuccess',
                    'apiSuccessExample',
                    'apiUse',
                    'apiVersion',
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['mock/**'],
            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
                'filenames/match-regex': ['warn', '^[a-zA-Z-_]+$'],
            },
        },
        {
            files: ['test/*', 'test/**/*'],
            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'filenames/match-regex': ['warn', '^[0-9-]*[A-Za-z-_]+$'],
            },
        },
        {
            files: ['migrations/**'],
            rules: {
                'filenames/match-regex': ['warn', '^[0-9T]+-/|[A-Za-z-_]+$'],
                '@typescript-eslint/no-magic-numbers': 'off',
            },
        },
        {
            files: ['types/**/*'],
            rules: {
                'filenames/match-regex': ['warn', '^[a-z-]+.d$'],
            },
        },
    ],
};
