import colorPalette from './colorPalette'
import DesignSystem from 'design-system-utils'
import ms from 'modularscale-js'

const fontFamily = {
  system: `-apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  sans: `Colfax, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: `Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif`,
}

const transitions = {
  duration: '300ms',
  timing: 'cubic-bezier(0.77, 0, 0.175, 1)',
}

const modularscale = {
  base: [25], // should be the same as baseFontSize
  ratio: 1.25,
}

export const myDesignSystem = {
  type: {
    baseFontSize: '25px',

    sizes: {
      xs: `${ms(-2, modularscale)}px`,
      s: `${ms(-1, modularscale)}px`,
      base: `${ms(0, modularscale)}px`, // [default] p, h5, h6
      m: `${ms(1, modularscale)}px`, // h4
      l: `${ms(2, modularscale)}px`, // h3
      xl: `${ms(3, modularscale)}px`, // h2
      xxl: `${ms(4, modularscale)}px`, // h1
    },

    fontFamily,
    fontFamilyBase: fontFamily.sans,
    fontFamilyHeadings: fontFamily.sans,

    lineHeight: {
      headings: 1.1,
      base: 1.4,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },

  colors: {
    colorPalette,

    brand: {},
  },

  breakpoints: {
    s: '300px',
    m: '600px',
    l: '1000px',
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  spacing: {
    baseline: 20,
    padding: '0.3em',
    scale: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  },

  layout: {
    gutter: '20px',
    maxWidth: '900px',
    grid: {
      columnCount: 12,
    },
  },

  motion: {
    transitions,
  },
}

export const ds = new DesignSystem(myDesignSystem, {
  useModularScale: true,
  fontSizeUnit: 'rem',
})
