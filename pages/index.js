import React, { Component } from 'react'
import { injectGlobal, css } from 'styled-components'
import { ds } from '../designsystem'
import MasterLayout from '../layouts/master'
import globalStyles from '../designsystem/globalStyles'
import BigType from '../components/BigType'
import Name from '../components/Name'
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
      <MasterLayout title="Zander Martineau. Front-end developer in London.">
        {!!window.sidebar ? <Name /> : <BigType />}
        <Spacer intro>
          <Container>
            <h1 style={{ textAlign: 'center' }}>WTF?</h1>
            <h2>
              Zander Martineau. <br />Front-end developer in London.
            </h2>
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
            />
          </Spacer>
          <Spacer>
            <PinboardFeed feed="u:MrMartineau/t:zm:link/" title="Link feed" />
          </Spacer>
        </Container>
      </MasterLayout>
    )
  }
}
