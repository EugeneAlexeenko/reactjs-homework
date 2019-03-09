module.exports = {
  plugins: [
    require('autoprefixer'),
    // pack all the media queries in one file
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ]
    }),
  ]
};
