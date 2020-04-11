import React, { Fragment } from 'react'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import MasterLayout from '../layouts/master'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import { initApi } from '../utils/prismic'
import { Inverse } from '../components/Inverse'
import { ds } from '../designsystem'
import { MassiveLogo, Logo } from '../components/Logo'
import { FeedTitle } from '../components/Feed'
import { Gig } from '../components/Gig'
import { Link } from '../components/Link'

const IntroCopy = styled(FeedTitle)`
  text-align: left;
  line-height: 1.2;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Description = styled.h3`
  font-size: ${ds.fs('base')};
  line-height: 1.5;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Links = styled.div`
  margin: ${ds.spacing(3)} 0;
  text-align: center;
`

const FullHeight = styled.div`
  @media screen and (min-width: ${ds.bp('m')}) {
    min-height: 100vh;
  }
`
const Home = ({ work, articles, globalInfo }) => (
  <MasterLayout
    title={globalInfo.site_name}
    description={globalInfo.site_description}
    links={globalInfo.link_list}
  >
    <FullHeight>
      <MassiveLogo>
        <Logo size="50vmin" fill="var(--theme-foreground)" />
      </MassiveLogo>
    </FullHeight>

    <Container id="info">
      <IntroCopy>{globalInfo.intro_title}</IntroCopy>
      <Description>{globalInfo.intro_copy}</Description>

      {globalInfo.link_list.length && (
        <Links>
          {globalInfo.link_list.map((item, index, arr) => (
            <Fragment key={index}>
              <Link href={item.link_list_href}>{item.link_list_copy}</Link>
              {arr.length - 1 !== index && ' / '}
            </Fragment>
          ))}
        </Links>
      )}

      {!!globalInfo.now.length && <Gig text={globalInfo.now} />}
    </Container>

    {!!articles && (
      <Container id="words">
        <ArticleFeed results={articles} title="Words" />
      </Container>
    )}

    {!!work && (
      <Inverse id="projects">
        <Container>
          <WorkFeed results={work} title="Projects" />
        </Container>
      </Inverse>
    )}

    <Container id="reading">
      <PinboardFeed
        tag="zm:reading"
        title="Reading"
        subtitle="Interesting articles that I've read recently"
      />
    </Container>

    <Inverse id="bookmarks">
      <Container>
        <PinboardFeed tag="zm:link" title="Bookmarks" />
      </Container>
    </Inverse>
  </MasterLayout>
)

export async function getStaticProps() {
  const homePageData = await initApi()
    .then((api) => {
      return api
        .query(
          Prismic.Predicates.any('document.type', [
            'article',
            'work',
            'global',
          ]),
          {
            fetch: [
              'article.title',
              'article.uid',
              'article.date',
              'article.subtitle',
              'work.title',
              'work.description',
              'work.short_description',
              'work.long_description',
              'work.link',
              'work.date',
              'work.image',
              'work.project_metadata',
              'global.intro_title',
              'global.intro_copy',
              'global.site_name',
              'global.site_description',
              'global.descriptor',
              'global.now',
              'global.link_list',
            ],
            orderings: '[my.article.date desc, my.work.date desc]',
            pageSize: 100,
          }
        )
        .then((response) => {
          return response.results
        })
    })
    .catch((err) => console.log(err))

  const articles = homePageData.filter((item) => item.type === 'article')
  const work = homePageData.filter((item) => item.type === 'work')
  const globalInfo = homePageData.filter((item) => item.type === 'global')[0]
    .data

  return {
    props: { articles, work, globalInfo },
  }
}

export default Home
