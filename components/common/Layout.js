import styled from 'styled-components'
import { ds } from '../../designsystem'

export const Container = styled.div`
  width: 90%;
  max-width: ${ds.get('layout.maxWidth')};
  margin: 0 auto;
`
