module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@templates': './src/components/templates',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@routes': './src/routes',
            '@theme': './src/global/styles'
          }
        }
      ]
    ]
  };
};
