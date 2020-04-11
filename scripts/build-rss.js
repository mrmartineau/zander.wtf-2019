const RSS = require('rss')
const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')

const feed = new RSS({
  title: "Zander Martineau's Writing",
  description:
    'Articles and opinion by Zander Martineau, a Front-end developer in London.',
  feed_url: 'http://zander.wtf/atom.xml',
  site_url: 'http://zander.wtf',
  managingEditor: 'Zander Martineau',
  webMaster: 'Zander Martineau',
  copyright: `${new Date().getUTCFullYear()} Zander Martineau`,
  language: 'en',
})

const PRISMIC_ACCESS_TOKEN =
  'MC5XbVNqWkNrQUFBUUo1anA2.77-977-9AO-_ve-_ve-_ve-_vSBicDzvv73vv73vv73vv73vv70G77-9GO-_ve-_vWXvv71Q77-977-9cO-_ve-_ve-_ve-_vUE'
const PRISMIC_REPO = 'https://zanderwtf.prismic.io/api/v2'

const initApi = (req) => {
  return Prismic.getApi(PRISMIC_REPO, {
    accessToken: PRISMIC_ACCESS_TOKEN,
    req: req,
  })
}

const getArticles = async () => {
  const articles = await initApi()
    .then((api) => {
      return api
        .query(Prismic.Predicates.any('document.type', ['article']), {
          fetch: [
            'article.title',
            'article.uid',
            'article.date',
            'article.subtitle',
            'article.body',
          ],
          orderings: '[my.article.date desc]',
          pageSize: 3,
        })
        .then((response) => {
          return response.results
        })
    })
    .catch((err) => console.error(err))

  return articles.map((item) => {
    return feed.item({
      title: item.data.title[0].text,
      url: `https://zander.wtf/writing/${item.uid}`,
      guid: item.uid,
      author: 'Zander Martineau',
      date: item.data.date,
      description: PrismicDOM.RichText.asHtml(item.data.body),
    })
  })
}

async function buildRss() {
  await getArticles()
  return feed.xml()
}

module.exports = async (req, res) => {
  const feed = await buildRss()
  res.setHeader('content-type', 'text/xml')
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  res.send(feed)
}
