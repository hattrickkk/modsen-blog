export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        'next/font/google': '<rootDir>/__mocks__/nextFontMock.ts',
        '\\.(gif|jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.ts',
        '^i18n/(.*)$': '<rootDir>/i18n/routing.ts',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
}
