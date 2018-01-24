import styled from 'styled-components'
import { ds } from '../../designsystem'

export const Container = styled.div`
  width: 90%;
  max-width: ${ds.get('layout.maxWidth')};
  margin: ${props => props.intro ? '20vw auto' : '0 auto'};
`

export const Spacer = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
`
