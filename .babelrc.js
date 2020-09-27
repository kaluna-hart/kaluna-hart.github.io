module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['emotion'],
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false,
      },
    ],
  ],
};
