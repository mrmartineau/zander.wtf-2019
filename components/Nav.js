import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'
import ThemeSwitch from './ThemeSwitch'

const Nav = styled.nav`
  position: fixed;
  top: 1rem;
  right: 1rem;
  color: var(--theme-foreground);
  background-color: var(--theme-background);
  z-index: ${ds.z('high')};
  font-size: 0.8rem;
  mix-blend-mode: exclusion;
`

const NavLink = styled.a`
  margin: 0 0.4rem;
  cursor: pointer;
  height: 1rem;
  line-height: 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:link,
  &:visited {
    color: var(--theme-foreground);
  }

  &:hover {
    color: ${ds.color('link')};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`

const HorizontalNav = styled.div`
  position: absolute;
  right: 2rem;
`

const VerticalNav = styled.div`
  transform: rotate(90deg);
  transform-origin: 0 0;
  position: absolute;
  top: 2rem;
`

export default () => (
  <Nav>
    <HorizontalNav>
      <Link href="/#Writing" passHref>
        <NavLink>Words</NavLink>
      </Link>
      <Link href="/#Projects" passHref>
        <NavLink>Projects</NavLink>
      </Link>
    </HorizontalNav>

    <ThemeSwitch />

    <VerticalNav>
      <Link href="/#Reading" passHref>
        <NavLink>Reading</NavLink>
      </Link>
      <Link href="/#Bookmarks" passHref>
        <NavLink>Bookmarks</NavLink>
      </Link>
    </VerticalNav>
  </Nav>
)
