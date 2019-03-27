import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import MasterLayout from '../layouts/master'
import { initApi } from '../utils/prismic'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { ds } from '../designsystem'
import {
  paddedLinkStyles,
  codeStyles,
  baseline,
} from '../designsystem/globalStyles'
import ArticleFeed from '../components/ArticleFeed'
import { Inverse } from '../components/Inverse'
import { format } from 'date-fns'

const TimeWrapper = styled.div`
  opacity: 0.6;
  font-size: ${ds.fs('s')};
  margin-bottom: ${baseline};
`
const Time = styled.time`
  display: inline-block;
`

const Article = styled.article`
  a {
    ${paddedLinkStyles};
  }

  img {
    max-width: 100%;
  }

  ${codeStyles};
`

const ArticleTitle = styled.h1`
  font-size: ${ds.fs('xxl')};
  font-weight: normal;
  font-style: italic;
`

const ArticleSubtitle = styled.h1`
  font-size: ${ds.fs('xl')};
  font-weight: 300;
  opacity: 0.7;
`

export default class Writing extends Component {
  static async getInitialProps({ query }) {
    const response = await initApi()
      .then(api => {
        return api.getByUID('article', query.id)
      })
      .catch(err => console.error(err))
    console.log('TCL: Writing -> staticgetInitialProps -> response', response)

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
      .catch(err => console.error(err))

    return {
      query,
      title: response.data.title[0].text,
      subtitle: response.data.subtitle[0].text,
      body: response.data.body,
      canonical: response.data.original_url.url,
      articleId: response.id,
      firstPublished: response.first_publication_date,
      updated: response.last_publication_date,
      articles,
    }
  }

  render() {
    const {
      title,
      subtitle,
      body,
      canonical,
      articleId,
      firstPublished,
      updated,
    } = this.props
    console.log('TCL: render -> this.props', this.props)
    /* const title = response.data.title[0].text
    const subtitle = response.data.subtitle[0].text
    const body = response.data.body
    const canonical = response.data.original_url.url
      ? response.data.original_url.url
      : null */
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
            <Article>
              <ArticleTitle>{title}</ArticleTitle>
              <ArticleSubtitle>{subtitle}</ArticleSubtitle>
              <TimeWrapper>
                First published:{' '}
                <Time datetime={firstPublished} itemprop="datePublished">
                  {format(new Date(firstPublished), 'PP')}
                </Time>
                {!!updated && (
                  <Fragment>
                    {'. '}Updated:{' '}
                    <Time datetime={updated} itemprop="dateModified">
                      {format(new Date(updated), 'PP')}
                    </Time>
                  </Fragment>
                )}
              </TimeWrapper>

              {RichText.render(body)}
            </Article>
          </Container>
        </Spacer>
        <Spacer>
          <Inverse>
            <Container>
              <ArticleFeed
                results={this.props.articles}
                title="Recent posts"
                currentId={articleId}
              />
            </Container>
          </Inverse>
        </Spacer>
      </MasterLayout>
    )
  }
}
