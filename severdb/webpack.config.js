const path = require('path');

module.exports = {
  entry: './js/connactLogin.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
