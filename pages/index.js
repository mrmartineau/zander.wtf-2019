import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import { injectGlobal, css } from 'styled-components'
import { ds } from '../designsystem'
import BigType from '../components/BigType'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import { Container, Spacer } from '../components/common/Layout'
import { initApi } from '../utils/prismic'
import Prismic from 'prismic-javascript'
import setupServiceWorker from '../utils/setupServiceWorker'
import fluidType, { fluidSpace } from '../utils/fluidType'

const baseline = ds.pxTo(35, 25, 'rem')
// const baseFluidType = fluidType('15px', '20px', '320px', '1000px')
// const baseFluidType = fluidSpace('16px', '25px', '320px', '1000px')

injectGlobal`
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    color: ${ds.color('bright')};
    background-color: ${ds.color('dark')};
    font-family: ${ds.get('type.fontFamilyBase')};
    line-height: ${ds.get('type.lineHeight.base')};
    font-size: 16px;

    @media screen and (min-width: ${ds.bp('s')}) {
      font-size: calc(16px + (25 - 16) * ((100vw - 320px) / (1000 - 320)));
    }

    @media screen and (min-width: ${ds.bp('l')}) {
      font-size: 25px;
    }
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
    margin-bottom: ${baseline};
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
    margin-bottom: ${baseline};
  }

  h1 {
    font-size: ${ds.fs('xxl')};
    margin-bottom: ${ds.pxTo(70, 25, 'rem')};
  }

  h2 {
    font-size: ${ds.fs('xl')};
  }

  h3 {
    font-size: ${ds.fs('l')};
  }

  h4 {
    font-size: ${ds.fs('m')};
  }

  h5,
  h6 {
    font-size: ${ds.fs('m')};
    margin-bottom: 0;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: ${baseline};
  }

  code,
  pre {
    padding: 0 3px 2px;
    font-family: ${ds.get('type.fontFamily.mono')};
    font-size: ${ds.fs('s')};
    color: deepred;
    border-radius: 3px;
    tab-size: 3;
  }

  code {
    padding: 2px 4px;
    color: deepred;
  }

  pre {
    display: block;
    padding: 10px;
    margin: 0 0 ${baseline};
    color: #fff;
    background-color: #444;
    border-radius: 4px;
    white-space: pre;
    max-height: 90vh;
    overflow-y: scroll;
    overflow-x: scroll;

    code {
      padding: 0;
      color: #fff;
      background-color: #000;
      border: 0;
    }
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
