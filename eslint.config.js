import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginImport from 'eslint-plugin-import'
import airbnb from 'eslint-config-airbnb'
import { fixupPluginRules } from '@eslint/compat'

export default tseslint.config(
    { ignores: ['/.git', 'node_modules', './github', 'build', '.next', 'storybook-static'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            eslintPluginReact.recommended,
            airbnb.recommended,
            eslintPluginImport.recommended,
            eslintSimpleImportSort.recommended,
            eslintPluginPrettier.recommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': fixupPluginRules(reactHooks),
            'react-refresh': reactRefresh,
            react: eslintPluginReact,
            import: eslintPluginImport,
            airbnb,
            'simple-import-sort': eslintSimpleImportSort,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prettier/prettier': 'error',
            'no-unused-vars': 'error',
            'react-refresh/only-export-components': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [['^react', '^@?\\w'], ['^(@/.*|$)'], ['^\\.'], ['^@styles/.*\\.scss$', '^.+\\.s?css$']],
                },
            ],
            'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }
)
