import type { StorybookConfig } from '@storybook/core/types';

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
} as StorybookConfig;
