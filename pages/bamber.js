import React, { Fragment } from 'react'
import Head from 'next/head'
import GlobalStyles from '../designsystem/globalStyles'
import Age from '../components/Age'
import Container from '../components/Container'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 0;
`

export default () => (
  <Fragment>
    <Head>
      <title>Bamber Moses Martineau</title>
    </Head>

    <Container>
      <H1>Bamber Moses Martineau</H1>
      <Age dob="2017-08-23T06:24" />
    </Container>

    <GlobalStyles />
  </Fragment>
)
