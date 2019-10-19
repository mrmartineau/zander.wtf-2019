import React from 'react'
import styled from 'styled-components'

const NameWrapper = styled.div`
  overflow: hidden;
`

const Name = styled.div`
  width: 200%;
  text-align: center;
  transform: translateX(-25%);
  font-size: 25vw;
  line-height: 1;
  letter-spacing: 1px;
  font-weight: bold;
`

export default () => (
  <NameWrapper>
    <Name>ZANDER</Name>
  </NameWrapper>
)
