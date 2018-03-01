const withOffline = require('next-offline')

module.exports = withOffline()

// {
//   workboxOpts: {
//     runtimeCaching: [
//       { urlPattern: /^https?.*/, handler: 'networkFirst' },
//       {
//         urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
//         handler: 'cacheFirst',
//       },
//       {
//         urlPattern: 'https://zanderwtf.cdn.prismic.io/api/*',
//         handler: 'staleWhileRevalidate',
//         options: {
//           cacheableResponse: {
//             statuses: [0, 200],
//           },
//         },
//       },
//     ],
//   },
// }

