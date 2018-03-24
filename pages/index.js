import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import { injectGlobal, css } from 'styled-components'
import { ds } from '../designsystem'
import MasterLayout from '../layouts/master'
import globalStyles from '../designsystem/globalStyles'
import BigType from '../components/BigType'
const BigName = dynamic(import('../components/BigName'), {
  ssr: false,
  loading: () => <BigType />,
})
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { initApi } from '../utils/prismic'
import Prismic from 'prismic-javascript'
import setupServiceWorker from '../utils/setupServiceWorker'

injectGlobal`
  ${globalStyles}
`

export default class Page extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ req }) {
    const homePageData = await initApi()
      .then(api => {
        return api
          .query(Prismic.Predicates.any('document.type', ['article', 'work']), {
            fetch: [
              'article.title',
              'article.uid',
              'article.date',
              'article.subtitle',
              'work.title',
              'work.description',
              'work.link',
              'work.date',
            ],
            orderings: '[my.article.date desc, my.work.date desc]',
          })
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const articles = homePageData.filter(item => {
      return item.type === 'article'
    })

    const work = homePageData.filter(item => {
      return item.type === 'work'
    })
    return {
      articles: articles,
      work: work,
    }
  }

  componentDidMount() {
    setupServiceWorker()
  }

  render() {
    return (
      <MasterLayout title="Zander Martineau. Front-end developer in London.">
        <BigName />
        <h3 style={{ textAlign: 'center', fontSize: '30vw' }}>WTF‽</h3>
        <Spacer intro>
          <Container>
            <h1>
              Zander Martineau. <br />Front-end developer in London.
            </h1>
            <h2>Making the web simple, fun and fast since '06</h2>
          </Container>
        </Spacer>
        <Container>
          {this.props.articles && (
            <ArticleFeed results={this.props.articles} title="Writing" />
          )}
          {this.props.work && (
            <Spacer>
              <WorkFeed results={this.props.work} title="Work" />
            </Spacer>
          )}
          <Spacer>
            <PinboardFeed
              feed="u:MrMartineau/t:zm:reading/"
              title="Reading list"
              subtitle="Interesting articles that I've read recently"
            />
          </Spacer>
          <Spacer>
            <PinboardFeed
              feed="u:MrMartineau/t:zm:link/"
              title="Link feed"
              subtitle="My most recent bookmarks"
            />
          </Spacer>
        </Container>
      </MasterLayout>
    )
  }
}
