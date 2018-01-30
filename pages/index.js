import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import { injectGlobal, css } from 'styled-components'
import { ds } from '../designsystem'
import globalStyles from '../designsystem/globalStyles'
import BigType from '../components/BigType'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import { Container, Spacer } from '../components/common/Layout'
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
    const articles = await initApi()
      .then(api => {
        return api
          .query(Prismic.Predicates.at('document.type', 'article'), {
            fetch: [
              'article.title',
              'article.uid',
              'article.date',
              'article.subtitle',
            ],
            orderings: '[my.article.date desc]',
          })
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const work = await initApi()
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'work'), {
          orderings: '[my.work.date desc]',
        })
      })
      .catch(err => console.log(err))
    return {
      articles: articles,
      work: work.results,
    }
  }

  componentDidMount() {
    setupServiceWorker()
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Zander Martineau. Front-end developer in London.</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="google-site-verification"
            content="0jhxV5hlLfqQ8q7mc6Xif2GjQ64gn-aXasg1EKeW3gw"
          />
          <link rel="dns-prefetch" href="https://pinboard-api.now.sh" />
          <link rel="preconnect" href="https://pinboard-api.now.sh" />
        </Head>
        <BigType />
        <Container intro>
          <h1>WTF?</h1>
          <h3>Zander Martineau. Front-end developer in London.</h3>
          <h2>Making the web simple, fun and fast since '06</h2>
        </Container>
        <Container>
          <ArticleFeed results={this.props.articles} title="Writing" />
          <Spacer>
            <WorkFeed results={this.props.work} title="Work" />
          </Spacer>
          <Spacer>
            <PinboardFeed
              feed="https://pinboard-api.now.sh/json/u:MrMartineau/t:zm:reading/"
              title="Reading list"
            />
          </Spacer>
          <Spacer>
            <PinboardFeed
              feed="https://pinboard-api.now.sh/json/u:MrMartineau/t:zm:link/"
              title="Link feed"
            />
          </Spacer>
        </Container>
      </Fragment>
    )
  }
}
