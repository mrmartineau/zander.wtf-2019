import React, { Component } from 'react'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import { initApi } from '../utils/prismic'
import { Container, Spacer } from '../components/common/Layout'
import styled from 'styled-components'
import { ds } from '../designsystem'

const Article = styled.article`
  a {
    &:link,
    &:visited {
      color: ${ds.color('link')};
    }
    &:hover,
    &:active {
      color: ${ds.color('link', 'over')};
    }
  }
`

export default class Writing extends Component {
  static async getInitialProps({ req, query }) {
    const response = await initApi()
      .then(api => {
        return api.getByUID('article', query.slug)
      })
      .catch(err => console.log(err))

    return {
      query,
      response,
    }
  }

  render() {
    const response = this.props.response
    const title = response.data.title[0].text
    const body = response.data.body
    return (
      <Article>
        <Spacer>
          <Container>
            <Head>
              <title>{title}</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta
                name="google-site-verification"
                content="0jhxV5hlLfqQ8q7mc6Xif2GjQ64gn-aXasg1EKeW3gw"
              />
            </Head>
            <h1>{title}</h1>
            {RichText.render(body)}
          </Container>
        </Spacer>
      </Article>
    )
  }
}
