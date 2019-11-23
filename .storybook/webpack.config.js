const path = require('path');
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      // {
      //   loader: require.resolve('ts-loader')
      // },
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json'
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { injectParameters: true }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
// loader: require.resolve('@storybook/addon-storysource/loader'),
// options: { parser: 'typescript' }
