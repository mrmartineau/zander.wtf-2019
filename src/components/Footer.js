import React, { Fragment } from 'react'
import styled from 'styled-components'
import BigType from './BigType'
import { Link } from './Link'

const Info = styled.div`
  margin: 3rem 0;
  text-align: center;
  line-height: 2;
`

export const Footer = ({ links }) => (
  <Fragment>
    <Info>
      &copy;{new Date().getFullYear()}&nbsp;/&nbsp;
      {links.map((item, index) => (
        <Fragment key={index}>
          <Link href={item.link_list_href}>{item.link_list_copy}</Link>
          {' / '}
        </Fragment>
      ))}
      <Link href="/atom.xml">RSS</Link>
    </Info>

    <BigType />
  </Fragment>
)
