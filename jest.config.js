const needTransformerLib = require('./jest_shared/needTransformerLib');

const jestConfig = {
  verbose: true,
  // projects: [
  //   {
  //     displayName: 'rn',
  //     // preset: 'react-native',
  //     testMatch: ['<rootDir>/src/**/__test__/rn/**/*.js']
  //     // transform: {
  //     //   '^.+\\.(js|jsx)$': require.resolve('react-native/jest/preprocessor.js')
  //     // }
  //   },
  //   {
  //     displayName: 'h5',
  //     testMatch: ['<rootDir>/src/**/__test__/h5/**/*.js']
  //   }
  // ],
  clearMocks: true,
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
    'css',
    'less',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest_shared/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/jest_shared/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest_shared/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '\\.(js|jsx|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
    [`node_modules/(${needTransformerLib.join(
      '|',
    )}).+\\.(js|jsx)$`]: require.resolve('react-native/jest/preprocessor.js'),
  },
  transformIgnorePatterns: [
    `node_modules/(?!(${needTransformerLib.join('|')}))`,
  ],
  preset: 'react-native',
};

console.log('====[jestConfig]', jestConfig);

module.exports = jestConfig;
