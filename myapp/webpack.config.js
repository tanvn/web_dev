const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './client_js/client.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'public', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],
}
