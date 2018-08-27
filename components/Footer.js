import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'
import BigType from './BigType'
import { linkStyles } from '../designsystem/globalStyles'

const Footer = styled.footer`
  margin: 20vw 0 -10vw 0;
`

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${ds.spacing(3)} 0;
`

const LinkListItem = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  ${linkStyles};
`

export default () => (
  <Footer>
    <LinkList>
      Zander can also be found on
      <LinkListItem
        href="https://github.com/mrmartineau"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </LinkListItem>{' '}
      and{' '}
      <LinkListItem
        href="https://twitter.com/mrmartineau"
        target="_blank"
        rel="noopener"
      >
        Twitter
      </LinkListItem>
    </LinkList>
    <BigType />
  </Footer>
)
