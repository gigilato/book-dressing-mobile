module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'lodash',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: './src',
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@config': './src/config',
            '@services': './src/services',
            '@screens': './src/screens',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@theme': './src/theme',
            '@api': './src/api',
          },
        },
      ],
    ],
  }
}
