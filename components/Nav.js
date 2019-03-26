import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'
import ThemeSwitch from './ThemeSwitch'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  color: var(--theme-background);
  background-color: var(--theme-foreground);
  padding: 0.4rem calc(env(safe-area-inset-right) + 0.4rem)
    calc(env(safe-area-inset-bottom) + 0.4rem)
    calc(env(safe-area-inset-left) + 0.4rem);
  z-index: ${ds.z('high')};
  text-transform: uppercase;
  font-size: 0.8rem;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
  margin: 0 0.4rem;
  cursor: pointer;
  display: block;
  height: 1rem;

  &:link,
  &:visited {
    color: var(--theme-background);
  }

  &:hover {
    opacity: 0.4;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`

export default () => (
  <Nav>
    <Link href="/">
      <NavLink>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <use xlinkHref="#fill" fill="currentColor" />
          <defs>
            <path
              id="fill"
              fillRule="evenodd"
              d="M0 0h200L94 147l106 53H0L106 53 0 0z"
            />
          </defs>
        </svg>
      </NavLink>
    </Link>

    <ThemeSwitch />

    <NavLinks>
      <Link href="/#Writing">
        <NavLink>Writing</NavLink>
      </Link>
      <Link href="/#Projects">
        <NavLink>Projects</NavLink>
      </Link>
      <Link href="/#Reading">
        <NavLink>Reading</NavLink>
      </Link>
      <Link href="/#Bookmarks">
        <NavLink>Bookmarks</NavLink>
      </Link>
    </NavLinks>
  </Nav>
)
