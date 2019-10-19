import styled from 'styled-components'
import { RichText } from './RichText'
import { Inverse } from './Inverse'

const GigWrapper = styled.div`
  padding: 1rem;

  p:last-child {
    margin-bottom: 0;
  }
`

export const Gig = ({ text }) => (
  <Inverse
    css={`
      margin: 2rem 0;
    `}
  >
    <GigWrapper>
      <RichText text={text} />
    </GigWrapper>
  </Inverse>
)
