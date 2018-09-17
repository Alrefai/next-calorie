const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withPlugins([
  withCSS,
], nextConfig)
