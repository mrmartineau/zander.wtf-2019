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
  font-size: 0.7rem;
  color: var(--theme-background);
  background-color: var(--theme-foreground);
  padding: 1.4rem 0.4rem 1.4rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @supports (padding: max(0px)) {
    padding-top: calc(max(12px, env(safe-area-inset-bottom)) + 0.4rem);
    padding-right: calc(max(12px, 0.4rem));
    padding-bottom: calc(max(12px, env(safe-area-inset-bottom)) + 0.4rem);
    padding-left: calc(max(12px, 0.4rem));
  }

  @media screen and (min-width: ${ds.bp('m')}) {
    font-size: 0.8rem;
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
  margin: 0 0.3rem;
  cursor: pointer;
  height: 1rem;
  line-height: 1rem;
  text-decoration: none;
  text-transform: uppercase;

  &:link,
  &:visited,
  &:focus {
    color: var(--theme-background);
  }

  &:hover {
    color: ${ds.color('link')};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (min-width: ${ds.bp('m')}) {
    &:link,
    &:visited,
    &:focus {
      color: var(--theme-foreground);
    }

    &:hover {
      color: ${ds.color('link')};
    }
  }
`

const HorizontalNav = styled.div`
  @media screen and (min-width: ${ds.bp('m')}) {
    position: absolute;
    right: 2rem;
  }
`

const VerticalNav = styled.div`
  @media screen and (min-width: ${ds.bp('m')}) {
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
      <Link href="https://notes.zander.wtf" passHref>
        <NavLink>Notes</NavLink>
      </Link>
    </VerticalNav>
  </Nav>
)
