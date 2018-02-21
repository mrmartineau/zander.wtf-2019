import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Zander Martineau</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{__html: `
            :root {
              --theme-foreground: #fff;
              --theme-background: #000;
              --theme-accent: #02C39A;
            }

            :root.theme-inverse {
              --theme-foreground: #000;
              --theme-background: #fff;
              --theme-accent: #02C39A;
            }

            :root.theme-accent {
              --theme-foreground: #fff;
              --theme-background: #02C39A;
              --theme-accent: #000;
            }

            /* 16px @ 300px increasing to 25px @ 1000px */
            @media (min-width: 300px) {
              :root {
                font-size: calc(1rem + ((1vw - 3px) * 1.2857));
                /* Where: * 1.2857 = 100 * font_Size_Difference / viewport_Width_Difference */
              }
            }
            /* Prevent font scaling beyond this breakpoint */
            @media (min-width: 1000px) {
              :root {
                font-size: 25px;
              }
            }

            html {
              box-sizing: border-box;
              text-size-adjust: 100%;
              text-rendering: optimizeLegibility;
            }

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
            }

            @font-face {
              font-family: 'Colfax';
              font-weight: normal;
              src: url('/static/fonts/ColfaxWebRegularSub.woff') format('woff');
            }

            @font-face {
              font-family: 'Colfax';
              font-weight: bold;
              src: url('/static/fonts/ColfaxWebBoldSub.woff') format('woff');
            }
          }
          `}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
