import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'

const BigType = styled.div`
  font-size: 200vw;
  font-weight: 900;
  font-family: ${ds.get('type.fontFamilyBase')};
  color: ${ds.color('text')};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  line-height: 0.72;
`

const BigTypeItem = styled.div`
  width: 200%;
  transform: translateX(-25%);
  text-align: center;
`

const name = ['Z', 'A', 'N', 'D', 'E', 'R']

export default () => (
  <BigType>
    {name.map(item => <BigTypeItem key={item}>{item}</BigTypeItem>)}
  </BigType>
)
