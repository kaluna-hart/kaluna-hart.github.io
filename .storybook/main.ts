const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralvaluesFromEnum: true,
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@svg'] = path.resolve(__dirname, '../public/svg/');
    const rules = config.module.rules;
    const fileLoaderIndex = rules.findIndex((rule) => {
      const { test } = rule;
      return test.toString().startsWith('/\\.(svg|ico');
    });
    rules[fileLoaderIndex].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

    rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });
    return config;
  },
};
// config.module.rules.push({
//   test: /\.tsx?$/,
//   use: [
//     {
//       loader: require.resolve('ts-loader'),
//       options: {
//         transpileOnly: true,
//       },
//     },
//   ],
// });
// config.resolve.extensions.push('.ts', '.tsx');
