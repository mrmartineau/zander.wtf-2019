import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'
import Name from './Name'
import { paddedLinkStyles } from '../designsystem/globalStyles'

const Footer = styled.footer`
  margin: 20vw 0;
`

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${ds.spacing(3)} 0;
`

const LinkListItem = styled.a`
  display: inline-block;
  ${paddedLinkStyles};
`

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/mrmartineau',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/mrmartineau',
  },
]

export default () => (
  <Footer>
    <Name />
    <LinkList>
      {links.map(item => (
        <LinkListItem key={item.name} href={item.url} target="_blank" rel="noopener">
          {item.name}
        </LinkListItem>
      ))}
    </LinkList>
  </Footer>
)
