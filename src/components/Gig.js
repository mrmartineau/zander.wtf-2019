import styled from 'styled-components'
import { RichText } from './RichText'

const GigWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid var(--theme-foreground);
  line-height: 1.4;
  border-right-width: 0;
  border-left-width: 0;
  text-align: center;

  p:last-child {
    margin-bottom: 0;
  }
`

export const Gig = ({ text }) => (
  <GigWrapper>
    <RichText text={text} />
  </GigWrapper>
)
