import { css } from 'styled-components'

export default (minFontSize, maxFontSize, breakpointSmall, breakpointLarge) => {
  return css`
    html {
      /* font-size: ${minFontSize}; */
      font-size: calc(${minFontSize} + (${parseInt(maxFontSize, 10) -
    parseInt(minFontSize, 10)}) * ((100vw - ${breakpointSmall}) / (${parseInt(
    breakpointLarge,
    10
  ) - parseInt(breakpointSmall, 10)})));
    }

    /* @media screen and (min-width: ${breakpointSmall}) {
      html {
        font-size: calc(${minFontSize} + 6 * ((100vw - ${breakpointSmall}) / 680));
      }
    }

    @media screen and (min-width: ${breakpointLarge}) {
      html {
        font-size: ${maxFontSize};
      }
    } */
  `
}

export const fluidSpace = (
  minFontSize,
  maxFontSize,
  breakpointSmall,
  breakpointLarge
) => {
  return `calc(${minFontSize} + (${parseInt(maxFontSize, 10) - parseInt(minFontSize, 10)}) * ((100vw - ${breakpointSmall}) /(${parseInt(breakpointLarge, 10) - parseInt(breakpointSmall, 10)})))`
}
