import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: var(--theme-background);
  background-color: var(--theme-foreground);
  padding: 10px;
  z-index: ${ds.z('high')};
  text-transform: uppercase;
  font-size: 13px;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`

const NavLink = styled.a`
  margin: 0 5px;
  cursor: pointer;
  color: var(--theme-background);
  display: block;

  &:hover {
    opacity: 0.4;
  }
`

export default () => (
  <Nav>
    <Link href="/">
      <NavLink>
        <svg
          width="20"
          height="20"
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

    <NavLinks>
      <Link href="/#Writing">
        <NavLink>Writing</NavLink>
      </Link>
      <Link href="/#Work">
        <NavLink>Work</NavLink>
      </Link>
      <Link href="/#Reading">
        <NavLink>Reading</NavLink>
      </Link>
      <Link href="/#Links">
        <NavLink>Links</NavLink>
      </Link>
    </NavLinks>
  </Nav>
)
