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
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
        },
      ],
    });
    return config;
  },
});
