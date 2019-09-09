import styled from 'styled-components'

export const Inverse = styled.div.attrs(() => ({
  className: 'inverse',
}))`
  background-color: var(--theme-background);
  color: var(--theme-foreground);
  padding: 1px 0;
`
