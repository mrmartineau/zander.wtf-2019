import React, { Component } from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'

const ThemeButton = styled.button`
  position: fixed;
  left: 5vw;
  bottom: 1rem;
  border: 0;
  width: 1.8rem;
  overflow: hidden;
  padding: 0.2rem;
  z-index: ${ds.z('high')};
  background-color: var(--theme-background);
  cursor: pointer;
  border-radius: 0.1rem;

  svg {
    display: block;
  }

  @media screen and (min-width: 900px) {
    left: 1rem;
  }

  &:hover {
    background-color: var(--theme-foreground);

    svg {
      fill: var(--theme-background);
    }
  }

  &:focus {
    outline: 0;
  }
`

const toggleRootClass = () => {
  document.documentElement.classList.toggle('theme-inverse')
}

export default () => (
  <ThemeButton onClick={toggleRootClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98 90"
      fill="var(--theme-foreground)"
    >
      <path d="M88.979 89.193c4.256 0 7.521-4.028 7.521-8.788v-70.22c0-4.76-3.265-8.787-7.521-8.787H49.578v-.012H8.28c-3.756 0-6.78 3.542-6.78 7.942V81.23c0 4.4 3.024 7.94 6.78 7.94H49.249a1.033 1.033 0 0 0 .206.023H88.98zm0-2.065H50.488V57.45H38.696v11.274L12.149 53.38l-2.591-1.498 29.138-16.843V46.36h20.705v.001h.04v11.277l26.546-15.345 2.592-1.499L59.44 23.953v11.32h-8.953V3.463h38.491c2.931 0 5.455 2.89 5.455 6.723v70.219c0 3.833-2.524 6.723-5.455 6.723z" />
    </svg>
  </ThemeButton>
)
