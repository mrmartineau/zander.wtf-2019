import React, { Component } from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem/index'

const ThemeButton = styled.button`
  position: fixed;
  left: 5vw;
  bottom: 1rem;
  border: 0;
  width: 1.4rem;
  padding: 0;
  z-index: ${ds.z('high')};
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    left: 1rem;
  }

  &:hover svg {
    fill: var(--theme-accent);
  }

  &:focus {
    outline: 0;
  }
`

export default class ThemeSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const themes = ['theme-inverse', 'theme-accent', '']

    this.setState({
      active: this.state.active === 2 ? 0 : this.state.active + 1,
    })

    const nextClass = themes[this.state.active]
    document.documentElement.className = nextClass
  }

  render() {
    return (
      <ThemeButton onClick={this.handleClick}>
        <svg viewBox="0 0 301 197" fill="var(--theme-foreground)"><path fillRule="evenodd" d="M301 197V0h-56.197l-45.52 96.249L153.763 0H3.372v51.22h77.271L0 145.78V197h155.105l-26.319-51.4-56.291.18 61.942-72.631 21.573 42.8 20.232 39.4h46.082l20.231-39.4V197H301z"/></svg>
      </ThemeButton>
    )
  }
}
