import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import GlobalStyles from '../designsystem/globalStyles'
import Age from '../components/Age'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import styled from 'styled-components'

const H1 = styled.h1`
  margin-top: 0;
`

class AgeCalc extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsElapsed: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState(prevState => ({
      secondsElapsed: prevState.secondsElapsed + 1,
    }))
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Bamber Martineau</title>
        </Head>

        <Spacer id="main">
          <Container>
            <H1>Bamber's Age</H1>
            <Age age="2017-08-23T06:24" />
          </Container>
        </Spacer>

        <GlobalStyles />
      </Fragment>
    )
  }
}

export default AgeCalc
