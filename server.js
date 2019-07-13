/**
 * SSR Cache: https://github.com/zeit/next.js/tree/canary/examples/ssr-caching
 * Static caching: https://github.com/zeit/next.js/issues/1791#issuecomment-315459436
 * 301 Redirects: https://www.raygesualdo.com/posts/301-redirects-with-nextjs/
 * Local fonts: https://github.com/zeit/next.js/issues/512#issuecomment-367164248
 */
const next = require('next')
const express = require('express')
const cacheableResponse = require('cacheable-response')
const redirects = require('./redirects')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res, pagePath, queryParams }) => ({
    data: await app.renderToHTML(req, res, pagePath, queryParams),
  }),
  send: ({ data, res }) => res.send(data),
})

const siteRedirects = redirects

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

  siteRedirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
