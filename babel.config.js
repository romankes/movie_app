const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['ts', 'tsx'],
          alias: {
            '@': path.resolve(__dirname, 'src/'),
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
