import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import subIn from 'sub-in'
import randomArray from '@libshin/random-array'
import MasterLayout from '../layouts/master'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import { initApi } from '../utils/prismic'
import { Inverse } from '../components/Inverse'
import { paddedLinkStyles } from '../designsystem/globalStyles'
import { ds } from '../designsystem'
import { MassiveLogo, Logo } from '../components/Logo'
import { FeedTitle } from '../components/Feed'

const IntroCopy = styled(FeedTitle)`
  text-align: left;
`

const Description = styled.h2`
  font-size: ${ds.fs('m')};
  line-height: 1.3;
  line-height: 1.3;
  font-weight: normal;
`

const Gig = styled.p`
  font-size: 1rem;
`

const Links = styled.div`
  margin: ${ds.spacing(3)} 0;
`

const LinkListItem = styled.a`
  display: inline-block;
  ${paddedLinkStyles};
  margin-right: 0.5rem;

  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`

const FullHeight = styled.div`
  min-height: 100vh;
`

export default class Page extends Component {
  static async getInitialProps() {
    const homePageData = await initApi()
      .then(api => {
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
                'global.intro_title',
                'global.intro_copy',
                'global.link_list',
                'global.site_name',
                'global.site_description',
                'global.descriptor',
              ],
              orderings: '[my.article.date desc, my.work.date desc]',
              pageSize: 100,
            }
          )
          .then(response => {
            return response.results
          })
      })
      .catch(err => console.log(err))

    const articles = homePageData.filter(item => item.type === 'article')
    const work = homePageData.filter(item => item.type === 'work')
    const globalInfo = homePageData.filter(item => item.type === 'global')[0]
      .data
    const descriptors = globalInfo.descriptor.reduce((accumulator, item) => {
      return [...accumulator, item.descriptor_copy] //accumulator.push(item.descriptor_copy)
    }, [])

    return {
      articles,
      work,
      globalInfo,
      descriptors: randomArray(descriptors),
    }
  }

  render() {
    const { work, articles, globalInfo, descriptors } = this.props

    return (
      <MasterLayout
        title={globalInfo.site_name}
        description={globalInfo.site_description}
      >
        <FullHeight>
          <MassiveLogo>
            <Logo size="50vh" fill="var(--theme-foreground)" />
          </MassiveLogo>
        </FullHeight>

        <Container id="info">
          <IntroCopy>{globalInfo.intro_title}</IntroCopy>

          <Description>{subIn(globalInfo.intro_copy, descriptors)}</Description>

          <Gig>
            Currently working with{' '}
            <LinkListItem href="https://fairfx.com">FairFX</LinkListItem>
          </Gig>

          <Links>
            {globalInfo.link_list.map((item, index, arr) => (
              <Fragment key={index}>
                <LinkListItem href={item.link_list_href}>
                  {item.link_list_copy}
                </LinkListItem>
                {arr.length - 1 !== index && ' / '}
              </Fragment>
            ))}
          </Links>
        </Container>

        {!!articles && (
          <Container id="words">
            <ArticleFeed results={articles} title="Words" />
          </Container>
        )}

        {!!work && (
          <Inverse id="projects">
            <Container wide>
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
  }
}
