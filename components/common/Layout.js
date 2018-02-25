import styled from 'styled-components'
import { ds } from '../../designsystem'

export const Container = styled.div`
  width: 90%;
  max-width: ${ds.get('layout.maxWidth')};
  margin: 0 auto;
`

export const Spacer = styled.div`
  margin-top: ${props => props.intro ? '20vw' : '10vw'};
  margin-bottom: ${props => props.intro ? '20vw' : '10vw'};
`
