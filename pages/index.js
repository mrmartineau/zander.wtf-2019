import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Prismic from 'prismic-javascript'
import MasterLayout from '../layouts/master'
import globalStyles from '../designsystem/globalStyles'
import Name from '../components/Name'
import PinboardFeed from '../components/PinboardFeed'
import ArticleFeed from '../components/ArticleFeed'
import WorkFeed from '../components/WorkFeed'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { initApi } from '../utils/prismic'
import { Inverse } from '../components/Inverse'

injectGlobal`
  ${globalStyles}
`

const IntroCopy = styled.h1`
  font-size: 2rem;
  line-height: 1.3;

  div {
    font-weight: normal;
    margin-top: 4vw;
    font-size: 0.7em;
  }
`

const Gig = styled.p`
  font-size: 1rem;
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
        <Name />
        <Spacer intro id="main">
          <Container>
            <IntroCopy>
              I’m Zander Martineau, <br />
              a freelance Front-end developer in London.
              <div>
                I’ve been making the web accessible, easy-to-use & fast since
                the &lt;blink&gt; tag was cool.
              </div>
            </IntroCopy>
            <Gig>Current gig: Lead front-end dev @ FairFX</Gig>
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
