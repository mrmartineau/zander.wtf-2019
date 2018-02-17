import { css } from 'styled-components'
import { ds } from './index'
// import fluidType, { fluidSpace } from '../utils/fluidType'

export const baseline = ds.pxTo(35, 25, 'rem')
// const baseFluidType = fluidType('15px', '20px', '320px', '1000px')
// const baseFluidType = fluidSpace('16px', '25px', '320px', '1000px')

// global styles
export default `
  html {
    color: ${ds.color('bright')};
    background-color: ${ds.color('dark')};
    font-family: ${ds.get('type.fontFamilyBase')};
    line-height: ${ds.get('type.lineHeight.base')};
  }

  p {
    margin-top: 0;
    margin-bottom: ${baseline};
  }

  /**
  * Headings
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${ds.get('type.fontFamilyHeadings')};
    line-height: ${ds.get('type.lineHeight.headings')};
    margin-top: 0;
    margin-bottom: ${baseline};
  }

  h1 {
    font-size: ${ds.fs('xxl')};
    margin-bottom: ${ds.pxTo(70, 25, 'rem')};
  }

  h2 {
    font-size: ${ds.fs('xl')};
  }

  h3 {
    font-size: ${ds.fs('l')};
  }

  h4 {
    font-size: ${ds.fs('m')};
  }

  h5,
  h6 {
    font-size: ${ds.fs('m')};
    margin-bottom: 0;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: ${baseline};
  }

  ::-moz-selection {
    background: ${ds.color('link', 'over')};
    color: ${ds.color('bright')};
  }

  ::selection {
    background: ${ds.color('link', 'over')};
    color: ${ds.color('bright')};
  }
`

export const linkStyles = css`
  word-wrap: break-word;

  &:link,
  &:visited {
    color: ${ds.color('link')};
  }
  &:hover,
  &:active {
    color: ${ds.color('link', 'over')};
  }
`

export const codeStyles = css`
  code,
  pre {
    font-family: ${ds.get('type.fontFamily.mono')};
    font-size: ${ds.fs('xs')};
    color: ${ds.color('dark')};
    background-color: ${ds.color('bright')};
  }

  code {
    padding: 2px 4px;
  }

  pre {
    position: relative;
    display: block;
    padding: ${baseline};
    margin: 0 0 ${baseline};
    /* max-height: 90vh; */
    overflow: auto;
    tab-size: 3;
    white-space: pre;

    code {
      padding: 0;
      color: ${ds.color('bright')};
      background-color: ${ds.color('dark')};
      border: 0;
    }
  }
`
