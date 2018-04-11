const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const express = require('express')
const buildRss = require('./scripts/build-rss')
const redirects = [
  { from: '/articles', to: '/#Writing' },
  { from: '/kickoff', to: 'http://trykickoff.com' },
  { from: '/lab', to: '/' },
  { from: '/styleguide', to: '/' },
  { from: '/work', to: '/#Work' },
  { from: '/writing', to: '/#Writing' },
  { from: '/2017/01/creative-technology-monthly-disappearing-interface/', to: '/writing/creative-technology-monthly-disappearing-interface' },
  { from: '/2016/12/creative-technology-monthly-motion-and-animation/', to: '/writing/creative-technology-monthly-motion-and-animation' },
  { from: '/2016/11/creative-technology-monthly-chatbots/', to: '/writing/creative-technology-monthly-chatbots' },
  { from: '/2016/05/update-npm-modules/', to: '/writing/updating-npm-packages' },
  { from: '/2016/04/site-redesign/', to: '/writing/redesigning-my-site' },
  { from: '/2016/02/kickoff-6-and-the-future/', to: 'http://trykickoff.com' },
  { from: '/2016/02/how-to-create-custom-grids-with-kickoff/', to: '/writing/how-to-create-custom-grids-with-kickoff' },
  { from: '/2016/01/responsive-helper-classes/', to: '/writing/add-responsive-helper-classes-to-your-project' },
  { from: '/2015/09/UX-of-a-front-end-framework/', to: '/writing/improving-the-ux-of-a-front-end-framework' },
  { from: '/2015/09/SVG-on-the-web/', to: '/' },
  { from: '/2015/01/shuttle-for-mac/', to: '/' },
  { from: '/2015/01/dev-stack/', to: '/' },
  { from: '/2014/11/trakjs-universal-analytics-api/', to: 'https://github.com/mrmartineau/trak.js' },
  { from: '/2014/08/the-road-to-kickoff-version-4/', to: 'http://trykickoff.com' },
  { from: '/2014/08/pinboard-chrome-extension/', to: 'https://github.com/mrmartineau/pinboard-chrome-extension' },
  { from: '/2014/07/sublime-text-for-front-end-development/', to: '/' },
  { from: '/2014/05/yeoman-generator-development-tips/', to: '/' },
  { from: '/2014/01/speedtesting-gulp-and-grunt/', to: '/' },
  { from: '/2013/12/more-efficient-grunt-workflows/', to: '/' },
  { from: '/2013/12/introducing-kickoff/', to: 'http://trykickoff.com' },
  { from: '/2013/06/two-versions-of-jquery/', to: '/' },
  { from: '/2013/05/hidden-characters-in-password-inputs/', to: '/' },
  { from: '/2013/04/site-launch-mrmartineaucouk-my-social-home-page/', to: '/' },
  { from: '/2013/04/fix-chrome-caching-of-source-maps/', to: '/' },
  { from: '/2013/03/on-staying-current/', to: '/' },
  { from: '/2012/05/the-choreographic-grid-a-css-grid-for-content-interdigitation/', to: 'https://github.com/mrmartineau/Choreographic-Grid' },
  { from: '/2012/05/speedy-sublime-text-setup/', to: '/' },
  { from: '/2011/08/customise-sublime-text-2/', to: '/' },
  { from: '/2011/03/site-launch-soho-fixed/', to: '/' },
  { from: '/2011/01/quick-dirty-cloze-content-test/', to: 'https://github.com/mrmartineau/cloze-test' },
  { from: '/2011/01/css3-multi-column-spanning/', to: 'https://github.com/mrmartineau/cloze-test' },
  { from: '/2011/01/cloze-test-creator/', to: '/' },
  { from: '/2010/09/html5-coda-clip-library/', to: 'https://github.com/mrmartineau/HTML5-Coda-Clips' },
  { from: '/2010/04/pure-css-icons/', to: 'https://codepen.io/mrmartineau/full/mPxKzo/' },
]

app.prepare().then(() => {
  const server = express()

  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get("/atom.xml", (req, res, next) => {
    buildRss().then(feed => {
      res.set('Content-Type', 'text/xml');
      res.send(feed)
    }).catch(error => console.error(error))
  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
