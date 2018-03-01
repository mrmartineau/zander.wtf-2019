const withOffline = require('next-offline')

module.exports = withOffline({
  // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config
  workboxOpts: {
    // include: [],
    runtimeCaching: [
      { urlPattern: /^https?.*/, handler: 'staleWhileRevalidate' },
      { urlPattern: /.woff$/, handler: 'cacheFirst' },
    ],
  },
})

