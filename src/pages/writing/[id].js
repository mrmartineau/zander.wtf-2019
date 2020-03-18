import React, { Fragment } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import { RichText } from '../../components/RichText'
import MasterLayout from '../../layouts/master'
import { initApi } from '../../utils/prismic'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { ds } from '../../designsystem'
import { codeStyles, baseline } from '../../designsystem/globalStyles'
import ArticleFeed from '../../components/ArticleFeed'
import { Inverse } from '../../components/Inverse'
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

const Writing = ({
  title,
  subtitle,
  body,
  canonical,
  articleId,
  firstPublished,
  updated,
  articles,
  path,
  links,
}) => (
  <MasterLayout
    title={`"${title}" — An article by Zander Martineau`}
    description={subtitle}
    canonical={canonical}
    links={links}
  >
    <Head>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subtitle} />
      <meta property="og:url" content={`https://zander.wtf/writing/${path}`} />
    </Head>
    <Spacer>
      <Container>
        <Article>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleSubtitle>{subtitle}</ArticleSubtitle>

          <TimeWrapper>
            First published:{' '}
            <Time datetime={firstPublished} itemprop="datePublished">
              {format(new Date(firstPublished.split('+')[0]), 'PP')}
            </Time>
            {!!updated && (
              <Fragment>
                {'. '}Updated:{' '}
                <Time datetime={updated} itemprop="dateModified">
                  {format(new Date(updated.split('+')[0]), 'PP')}
                </Time>
              </Fragment>
            )}
          </TimeWrapper>

          <RichText text={body} />
        </Article>
      </Container>
    </Spacer>
    <Spacer>
      <Inverse>
        <Container>
          <ArticleFeed
            results={articles}
            title="Recent posts"
            currentId={articleId}
          />
        </Container>
      </Inverse>
    </Spacer>
  </MasterLayout>
)

export async function getStaticProps({ params }) {
  const response = await initApi()
    .then(api => {
      return api.getByUID('article', params.id)
    })
    .catch(err => console.error(err))

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

  const links = await initApi()
    .then(api => {
      return api
        .query(Prismic.Predicates.at('document.type', 'global'), {
          fetch: ['global.link_list'],
        })
        .then(response => {
          return response.results
        })
    })
    .catch(err => console.error(err))

  return {
    props: {
      title: response.data.title[0].text,
      subtitle: response.data.subtitle[0].text,
      body: response.data.body,
      canonical: response.data.original_url.url || null,
      articleId: response.uid,
      firstPublished: response.first_publication_date,
      updated: response.last_publication_date,
      path: params.id,
      articles,
      links: links[0].data.link_list,
    },
  }
}

export async function getStaticPaths() {
  const articles = await initApi()
    .then(api => {
      return api
        .query(Prismic.Predicates.at('document.type', 'article'), {
          fetch: ['article.uid'],
          pageSize: 100,
        })
        .then(response => {
          return response.results
        })
    })
    .catch(err => console.log(err))

  const paths = articles.map(post => ({
    params: { id: post.uid },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Writing
