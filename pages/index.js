import React, { Component } from 'react'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'
import MasterLayout from '../layouts/master'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { initApi } from '../utils/prismic'
import { Inverse } from '../components/Inverse'
import { linkStyles } from '../designsystem/globalStyles'
import { ds } from '../designsystem'

const IntroCopy = styled.h1`
  font-size: 2rem;
  line-height: 1.3;

  font-weight: normal;
  div {
    margin-top: 4vw;
    font-size: 0.7em;
  }
`

const Gig = styled.p`
  font-size: 1rem;
`

const Links = styled.div`
  margin: ${ds.spacing(3)} 0;
`

const LinkListItem = styled.a`
  display: inline-block;
  ${linkStyles};
  margin-right: 0.5rem;

  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`

export default class Page extends Component {
  static async getInitialProps() {
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

    const articles = homePageData.filter(item => item.type === 'article')
    const work = homePageData.filter(item => item.type === 'work')

    return {
      articles: articles,
      work: work,
    }
  }

  render() {
    return (
      <MasterLayout title="Zander Martineau. Front-end developer in London.">
        <Spacer id="main">
          <Container>
            <IntroCopy>
              Hey, I'm Zander Martineau.
              <br /> I’m an experienced freelance front-end developer based in
              the UK working with agencies and startups to achieve their goals.
            </IntroCopy>

            <Links>
              <LinkListItem
                href="https://github.com/mrmartineau"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </LinkListItem>
              {' / '}
              <LinkListItem
                href="https://toot.cafe/@zander"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mastodon
              </LinkListItem>{' '}
              {' / '}
              <LinkListItem
                href="https://twitter.com/mrmartineau"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </LinkListItem>
            </Links>
            <Gig>
              Current gig: Lead front-end dev @{' '}
              <LinkListItem
                href="https://fairfx.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                FairFX
              </LinkListItem>
            </Gig>
          </Container>
        </Spacer>
        <Container>
          {this.props.articles && (
            <ArticleFeed results={this.props.articles} title="Writing" />
          )}
        </Container>

        {this.props.work && (
          <Inverse>
            <Container>
              <Spacer>
                <WorkFeed results={this.props.work} title="Work" />
              </Spacer>
            </Container>
          </Inverse>
        )}
        <Container>
          <Spacer>
            <PinboardFeed
              feed="u:MrMartineau/t:zm:reading/"
              title="Reading"
              subtitle="Interesting articles that I've read recently"
            />
          </Spacer>
        </Container>

        <Inverse>
          <Container>
            <Spacer>
              <PinboardFeed
                feed="u:MrMartineau/t:zm:link/"
                title="Links"
                subtitle="My most recent bookmarks"
              />
            </Spacer>
          </Container>
        </Inverse>
      </MasterLayout>
    )
  }
}
