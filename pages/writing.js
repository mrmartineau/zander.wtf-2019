import React, { Component } from 'react'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import { initApi } from '../utils/prismic'
import { Container } from '../components/common/Layout'

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
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        {RichText.render(body)}
      </Container>
    )
  }
}
