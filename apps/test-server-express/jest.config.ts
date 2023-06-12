/* eslint-disable */
export default {
    displayName: 'test-server-express',
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': 'babel-jest'
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/apps/test-server-express'
};
