const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

//const { merge } = require('webpack-merge');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  return config;

});
