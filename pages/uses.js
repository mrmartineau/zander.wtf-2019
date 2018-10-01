import React, { Component } from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import MasterLayout from '../layouts/master'
import { initApi } from '../utils/prismic'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { ds } from '../designsystem'
import {
  linkStyles,
  paddedLinkStyles,
  codeStyles,
} from '../designsystem/globalStyles'
import Link from 'next/link'

const Article = styled.article`
  a {
    ${linkStyles};
  }

  img {
    max-width: 100%;
  }

  ${codeStyles};
`

const BackLinkWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 5vw;
  background-color: var(--theme-background);
  z-index: ${ds.z('mid')};
  opacity: 0.9;

  @media screen and (min-width: 1000px) {
    padding-left: 1rem;
  }
`

const BackLink = styled.a`
  font-family: ${ds.get('type.fontFamily.mono')};
  font-size: ${ds.fs('xs')};
  ${paddedLinkStyles};
`

const ArticleTitle = styled.h1`
  font-size: 5rem;
`

export default class Writing extends Component {
  static async getInitialProps({ query }) {
    const response = await initApi()
      .then(api => {
        return api.getByID('W7KABBIAACcA01pl')
      })
      .catch(err => console.error(err))

    return {
      title: response.data.title,
      body: response.data.body,
    }
  }

  render() {
    const { title, body } = this.props

    return (
      <MasterLayout
        title={title}
        description="Zander Martineau's hardware and software setup"
      >
        <Spacer>
          <Container>
            <Article>
              <ArticleTitle>{title}</ArticleTitle>
              {RichText.render(body)}
            </Article>
          </Container>
        </Spacer>
        <BackLinkWrapper>
          <Link href="/" passHref prefetch>
            <BackLink>← Back</BackLink>
          </Link>
        </BackLinkWrapper>
      </MasterLayout>
    )
  }
}
