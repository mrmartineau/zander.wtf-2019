import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'

const BigType = styled.div`
  position: relative;
  font-size: 210vw;
  font-weight: bold;
  overflow: hidden;
  margin: 0;
  padding: 0.1em 0 0;
  line-height: 0.72;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BigTypeItem = styled.div`
  width: 200%;
  text-align: center;
  z-index: ${ds.z('high')};
`

const name = ['Z', 'A', 'N', 'D', 'E', 'R']

export default () => (
  <BigType innerRef={bigType => (this.bigType = bigType)}>
    {name.map(item => <BigTypeItem key={item}>{item}</BigTypeItem>)}
  </BigType>
)
