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
  border-radius: 50%;

  @media screen and (min-width: 900px) {
    left: 1rem;
  }

  &:hover {
    transform: scale(1.2);
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
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      fill='var(--theme-foreground)'
    >
      <path d='M90.1 22.4c-.5-.5-1.3-.5-1.8 0l-16 16c-4.4-4-10.1-6.2-16.1-6.2-13.2 0-24 10.8-24 24 0 6 2.2 11.6 6.2 16.1l-16 16.1c-.5.5-.5 1.3 0 1.8.2.2.6.4.9.4s.6-.1.9-.4l16-16c4.5 4.2 10.3 6.5 16.4 6.5 13.2 0 24-10.8 24-24 0-6.2-2.3-11.9-6.5-16.4l16-16c.5-.7.5-1.4 0-1.9zM34.8 56.3c0-11.9 9.6-21.5 21.5-21.5 5.3 0 10.3 1.9 14.3 5.5L40.2 70.5c-3.5-3.9-5.4-8.9-5.4-14.2zM56.3 26c.7 0 1.3-.6 1.3-1.3v-14c0-.7-.6-1.3-1.3-1.3s-1.3.7-1.3 1.4v14c0 .6.6 1.2 1.3 1.2zM26 56.3c0-.7-.6-1.3-1.3-1.3h-14c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h14c.7-.1 1.3-.7 1.3-1.3zM33.1 34.9c.2.2.6.4.9.4s.6-.1.9-.4c.5-.5.5-1.3 0-1.8L25 23.2c-.5-.5-1.3-.5-1.8 0s-.5 1.3 0 1.8l9.9 9.9z' />
    </svg>
  </ThemeButton>
)
