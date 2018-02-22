import React, { Component } from 'react'
import Head from 'next/head'
import MasterLayout from '../layouts/master'
import { RichText } from 'prismic-reactjs'
import { initApi } from '../utils/prismic'
import { Container, Spacer } from '../components/common/Layout'
import styled, { injectGlobal } from 'styled-components'
import { ds } from '../designsystem'
import globalStyles, {
  linkStyles,
  codeStyles,
  baseline,
} from '../designsystem/globalStyles'
import Link from 'next/link'
import Prismic from 'prismic-javascript'
import ArticleFeed from '../components/ArticleFeed'

injectGlobal`
  ${globalStyles}
`

const Time = styled.time`
  font-size: ${ds.fs(-1)};
  font-family: ${ds.get('type.fontFamily.mono')};
  margin-bottom: ${baseline};
  display: block;
  opacity: 0.6;
`

const Article = styled.article`
  a {
    ${linkStyles};
  }

  img {
    max-width: 100%;
  }

  ${codeStyles};
`

const Hr = styled.hr`
  margin: 2rem auto;
  width: 50%;
  opacity: 0.5;
`

const BackLink = styled.a`
  font-family: ${ds.get('type.fontFamily.mono')};
  font-size: ${ds.fs(-2)};
  ${linkStyles};
  text-decoration: none;
  position: fixed;
  top: 1rem;
  left: 5vw;
`

export default class Writing extends Component {
  static async getInitialProps({ req, query }) {
    const response = await initApi()
      .then(api => {
        return api.getByUID('article', query.slug)
      })
      .catch(err => console.log(err))

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
            pageSize: 4,
          })
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    return {
      query,
      response,
      articles,
    }
  }

  render() {
    const response = this.props.response
    const title = response.data.title[0].text
    const body = response.data.body
    const canonical = response.data.original_url.url
      ? response.data.original_url.url
      : null
    return (
      <MasterLayout
        title={title}
        description="An article by Zander Martineau"
        canonical={canonical}
      >
        <Head>
          <meta property="og:type" content="article" />
        </Head>
        <Spacer>
          <Container>
            <Link href="/#Writing" passHref>
              <BackLink>← Back</BackLink>
            </Link>
            <Article>
              <h1>{title}</h1>
              <Time datetime={response.data.date}>{response.data.date}</Time>
              {RichText.render(body)}
            </Article>
            <Hr />
            <ArticleFeed
              results={this.props.articles}
              title="Recent posts"
              currentId={response.id}
              TitleTag="h4"
            />
          </Container>
        </Spacer>
      </MasterLayout>
    )
  }
}
