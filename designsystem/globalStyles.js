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
`

export const codeStyles = css`
  code,
  pre {
    padding: 0 3px 2px;
    font-family: ${ds.get('type.fontFamily.mono')};
    font-size: ${ds.fs('s')};
    color: deepred;
    border-radius: 3px;
    tab-size: 3;
  }

  code {
    padding: 2px 4px;
    color: deepred;
  }

  pre {
    display: block;
    padding: 10px;
    margin: 0 0 ${baseline};
    color: ${ds.color('bright')};
    background-color: ${ds.color('dark', 'lighter')};
    border-radius: 4px;
    white-space: pre;
    max-height: 90vh;
    overflow-y: scroll;
    overflow-x: scroll;

    code {
      padding: 0;
      color: ${ds.color('bright')};
      background-color: ${ds.color('dark')};
      border: 0;
    }
  }
`
