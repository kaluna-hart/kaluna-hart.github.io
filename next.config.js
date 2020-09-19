const path = require('path');
const rehypePrism = require('@mapbox/rehype-prism');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');
const images = require('remark-images');
const emoji = require('remark-emoji');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, images, emoji],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

module.exports = withMDX({
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack(config, options) {
    let { _alias } = config.resolve;
    _alias = {
      '@svg': path.resolve(__dirname, './public/svg'),
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});
