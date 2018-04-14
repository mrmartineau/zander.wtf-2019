/**
 * SSR Cache: https://github.com/zeit/next.js/tree/canary/examples/ssr-caching
 * Static caching: https://github.com/zeit/next.js/issues/1791#issuecomment-315459436
 * 301 Redirects: https://www.raygesualdo.com/posts/301-redirects-with-nextjs/
 * Local fonts: https://github.com/zeit/next.js/issues/512#issuecomment-367164248
 */
const next = require('next')
const express = require('express')
const LRUCache = require('lru-cache')
const routes = require('./routes')
const redirects = require('./redirects')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)

const buildRss = require('./scripts/build-rss')

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

const siteRedirects = redirects

app.prepare().then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.use(
    '/static',
    express.static(__dirname + '/static', {
      maxAge: '365d',
    })
  )

  siteRedirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get('/atom.xml', (req, res, next) => {
    buildRss()
      .then(feed => {
        res.set('Content-Type', 'text/xml')
        res.send(feed)
      })
      .catch(error => console.error(error))
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
