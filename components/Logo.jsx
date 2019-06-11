import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'

export const Logo = ({
  size = '1em',
  fill = 'currentColor',
  stroke = 'none',
}) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    strokeWidth="1"
    strokeLinecap="round"
  >
    <path
      d="M0 0h200L94 147l106 53H0L106 53 0 0z"
      fill={fill}
      stroke={stroke}
    />
  </svg>
)

export const MasterLogo = styled.a`
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--theme-foreground);
  z-index: ${ds.z('high')};
  cursor: pointer;
  transition: ${ds.get('motion.default')};
  mix-blend-mode: exclusion;

  &:hover {
    color: ${ds.color('link')};
  }
`

export const MassiveLogo = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: var(--theme-foreground);
  opacity: 0.1;
`
