import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${ds.z('high')};
  font-size: 0.8rem;
  color: var(--theme-background);
  background-color: var(--theme-foreground);
  padding: 0.4rem calc(env(safe-area-inset-right) + 0.4rem)
    calc(env(safe-area-inset-bottom) + 0.4rem)
    calc(env(safe-area-inset-left) + 0.4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    top: 1rem;
    right: 1rem;
    bottom: unset;
    left: unset;
    color: var(--theme-foreground);
    background-color: var(--theme-background);
    padding: unset;
    mix-blend-mode: exclusion;
    display: block;
  }
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
    color: var(--theme-background);
  }

  &:hover {
    color: ${ds.color('link')};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (min-width: 600px) {
    &:link,
    &:visited {
      color: var(--theme-foreground);
    }
  }
`

const HorizontalNav = styled.div`
  @media screen and (min-width: 600px) {
    position: absolute;
    right: 2rem;
  }
`

const VerticalNav = styled.div`
  @media screen and (min-width: 600px) {
    transform: rotate(90deg);
    transform-origin: 0 0;
    position: absolute;
    top: 2rem;
  }
`

export default () => (
  <Nav>
    <HorizontalNav>
      <Link href="/#info" passHref>
        <NavLink>Info</NavLink>
      </Link>
      <Link href="/#words" passHref>
        <NavLink>Words</NavLink>
      </Link>
      <Link href="/#projects" passHref>
        <NavLink>Projects</NavLink>
      </Link>
    </HorizontalNav>

    <VerticalNav>
      <Link href="/#reading" passHref>
        <NavLink>Reading</NavLink>
      </Link>
      <Link href="/#bookmarks" passHref>
        <NavLink>Bookmarks</NavLink>
      </Link>
    </VerticalNav>
  </Nav>
)
