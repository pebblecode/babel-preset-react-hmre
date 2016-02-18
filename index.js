module.exports = {
  plugins: [
    [require('babel-plugin-react-transform').default, {
      transforms: [
        {
          transform: require('react-transform-hmr'),
          imports: ['react'],
          locals: ['module'],
        }, {
          transform: require('react-transform-catch-errors'),
          imports: ['react', require('redbox-react')],
        },
      ],
    }],
  ]
};
