import React, { Fragment } from 'react'
import styled from 'styled-components'
import BigType from './BigType'
import { Link } from './Link'
import { links } from '../data/links'

const Info = styled.div`
  margin: 3rem 0;
  text-align: center;
  line-height: 2;
`

export const Footer = () => (
  <Fragment>
    <Info>
      &copy;{new Date().getFullYear()}&nbsp;/&nbsp;
      {links.map((item, index) => (
        <Fragment key={index}>
          <Link href={item.href}>{item.copy}</Link>
          {' / '}
        </Fragment>
      ))}
      <Link href="/atom.xml">RSS</Link>
    </Info>

    <BigType />
  </Fragment>
)
