import styled from 'styled-components'
import { ds } from '../designsystem'

export default styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${(p) => (p.wide ? '1500px' : ds.get('layout.maxWidth'))};
  margin: 0 auto;
  padding-top: 14vmax;
  padding-bottom: 12vmax;

  @media screen and (min-width: ${ds.bp('m')}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`
