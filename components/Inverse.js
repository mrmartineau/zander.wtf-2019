import React from 'react'
import styled from 'styled-components'

const InverseElement = styled.div`
  background-color: var(--theme-background);
  color: var(--theme-foreground);
  padding: 1px 0;
`

export const Inverse = ({ children }) => (
  <InverseElement className="inverse">{children}</InverseElement>
)
