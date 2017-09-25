module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js',

    // Add NODE_PATH to webpack.
    // https://webpack.js.org/configuration/resolve/#resolve-modules
    // https://stackoverflow.com/questions/45894047/how-to-add-node-path-to-webpack-in-package-json
    config.resolve.modules = ['./server', './server/modules']
    return config
  }
}
