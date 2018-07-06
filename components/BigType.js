import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollObserver from 'scroll-observer'
import jump from 'jump.js'
import { ds } from '../designsystem/index'
import { paddedLinkStyles } from '../designsystem/globalStyles'

const BigType = styled.div`
  position: relative;
  font-size: 210vw;
  font-weight: bold;
  overflow: hidden;
  margin: 0;
  padding: 0.04em 0 0;
  line-height: 0.72;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BigTypeItem = styled.div`
  width: 200%;
  text-align: center;
  z-index: ${ds.z('high')};
`

const SkipLink = styled.a`
  font-family: ${ds.get('type.fontFamily.mono')};
  font-size: ${ds.fs('xs')};
  ${paddedLinkStyles};
  background-color: var(--theme-foreground) !important;
  color: var(--theme-background) !important;
  font-weight: normal;
  line-height: 1.4;
  position: fixed;
  bottom: 2vh;
  right: 2vh;
  z-index: ${ds.z('high')};

  &:hover {
    background-color: var(--theme-background);
    color: var(--theme-foreground);
  }

  &.is-inactive {
    display: none;
  }
`

const name = ['Z', 'A', 'N', 'D', 'E', 'R']

export default class extends Component {
  componentDidMount() {
    if (this.bigType !== null) {
      this.bigTypeHeight = this.bigType.clientHeight
      this.windowHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
      const windowHeightHalfed = this.windowHeight / 2
      const threshold =
        this.bigTypeHeight - this.windowHeight - windowHeightHalfed
      this.scrollObserver = new ScrollObserver(this.skippy, {
        threshold: threshold,
        classNameActive: 'is-inactive',
      })
    }
  }

  jumpClick() {
    if (this.bigType !== null) {
      const initialDuration = 5000
      const percentageScrolled =
        window.scrollY / (this.bigTypeHeight - this.windowHeight)
      const duration = parseInt(
        initialDuration - initialDuration * percentageScrolled,
        10
      )
      jump('#main', {
        duration: duration,
      })
    }
  }
  render() {
    return (
      <BigType innerRef={bigType => (this.bigType = bigType)}>
        {name.map(item => <BigTypeItem key={item}>{item}</BigTypeItem>)}
        <SkipLink
          href="#main"
          innerRef={skippy => (this.skippy = skippy)}
          onClick={this.jumpClick.bind(this)}
        >
          SKIP
        </SkipLink>
      </BigType>
    )
  }
}
