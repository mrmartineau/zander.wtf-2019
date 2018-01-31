import React, { Component } from 'react'
import MasterLayout from '../layouts/master'
import { RichText } from 'prismic-reactjs'
import { initApi } from '../utils/prismic'
import { Container, Spacer } from '../components/common/Layout'
import styled, { injectGlobal } from 'styled-components'
import { ds } from '../designsystem'
import globalStyles, { codeStyles } from '../designsystem/globalStyles'

injectGlobal`
  ${globalStyles}
`

const Article = styled.article`
  a {
    word-wrap: break-word;

    &:link,
    &:visited {
      color: ${ds.color('link')};
    }
    &:hover,
    &:active {
      color: ${ds.color('link', 'over')};
    }
  }

  ${codeStyles};
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
      <MasterLayout title={title}>
        <Article>
          <Spacer>
            <Container>
              <h1>{title}</h1>
              {RichText.render(body)}
            </Container>
          </Spacer>
        </Article>
      </MasterLayout>
    )
  }
}
