import React, { Fragment, useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import GlobalStyles from '../designsystem/globalStyles'
import Age from '../components/Age'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 0;
`

const AgeCalc = () => {
  const [counter, setCounter] = useState(30)
  const r = useRef(null)
  r.current = { counter, setCounter }

  useEffect(() => {
    const id = setInterval(() => {
      r.current.setCounter(r.current.counter + 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, ['once'])

  return (
    <Fragment>
      <Head>
        <title>Bamber Moses Martineau</title>
      </Head>

      <Spacer id="main">
        <Container>
          <H1>Bamber Moses Martineau</H1>
          <Age dob="2017-08-23T06:24" />
        </Container>
      </Spacer>

      <GlobalStyles />
    </Fragment>
  )
}

export default AgeCalc
