import React, { Component, Fragment } from 'react'
import { injectGlobal } from 'styled-components'
import { ds } from '../designsystem'
import BigType from '../components/BigType'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import { Container } from '../components/common/Layout'
import { initApi } from '../utils/prismic'
import Prismic from 'prismic-javascript'

const baseline = ds.multiply('type.modularscale.base', 1.4)

injectGlobal`
	html {
		box-sizing: border-box;
		font-size: ${ds.get('type.baseFontSize')};
		text-size-adjust: 100%;
		text-rendering: optimizeLegibility;
		color: ${ds.color('text')};
		font-family: ${ds.get('type.fontFamilyBase')};
		line-height: ${ds.get('type.lineHeight.base')};
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
	}

  p {
    margin-top: 0;
    margin-bottom: ${baseline}px;
  }

  /**
  * Headings
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${ds.get('type.fontFamilyHeadings')};
    line-height: ${ds.get('type.lineHeight.headings')};
    margin-top: 0;
    margin-bottom: ${baseline}px;
  }

  h1 {
    font-size: ${ds.fs('xl')};
    margin-bottom: ${ds.multiply(baseline, 2)};

    @media screen and (min-width: ${ds.bp('m')}) {
      font-size: ${ds.fs('xxl')};
    }
  }

  h2 {
    font-size: ${ds.fs('l')};

    @media screen and (min-width: ${ds.bp('m')}) {
      font-size: ${ds.fs('xl')};
    }
  }

  h3 {
    font-size: ${ds.fs('m')};

    @media screen and (min-width: ${ds.bp('m')}) {
      font-size: ${ds.fs('l')};
    }
  }

  h4 {
    font-size: ${ds.fs('s')};

    @media screen and (min-width: ${ds.bp('m')}) {
      font-size: ${ds.fs('m')};
    }
  }

  h5,
  h6 {
    font-size: ${ds.fs('s')};
    margin-bottom: 0;

    @media screen and (min-width: ${ds.bp('m')}) {
      font-size: ${ds.fs('m')};
    }
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: ${baseline}px;
  }
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
            fetch: ['article.title', 'article.uid', 'article.date', 'article.subtitle'],
            orderings: '[my.article.date desc]',
          })
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const work = await initApi()
      .then(api => {
        return api.query(Prismic.Predicates.at('document.type', 'work'))
      })
      .catch(err => console.log(err))
    return {
      articles: articles,
      work: work.results,
    }
  }

  render() {
    return (
      <Fragment>
        <BigType />
        <Container>
          <h1>WTF?</h1>
          <h3>Zander Martineau. Front-end developer in London.</h3>
          <h2>Making the web simple, fun and fast since '06</h2>
        </Container>
        <Container>
          <ArticleFeed results={this.props.articles} title="Writing" />
          <WorkFeed results={this.props.work} title="Work" />
          <PinboardFeed
            feed="https://pinboard-api.now.sh/json/u:MrMartineau/t:zm:reading/"
            title="Reading list"
          />
          <PinboardFeed
            feed="https://pinboard-api.now.sh/json/u:MrMartineau/t:zm:link/"
            title="Link feed"
          />
        </Container>
      </Fragment>
    )
  }
}
