import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'
import Name from './Name'

const Footer = styled.footer`
  margin: 20vw 0;
`

export default () => (
  <Footer>
    <Name />
  </Footer>
)
