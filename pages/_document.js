import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
        <head>

          <style>{`
            html {
              box-sizing: border-box;
              text-size-adjust: 100%;
              text-rendering: optimizeLegibility;
              font-size: 16px;
            }

            @media screen and (min-width: 300px) {
              html {
                font-size: calc(16px + (25 - 16) * ((100vw - 300px) / (1000 - 300)));
              }
            }

            @media screen and (min-width: 1000px) {
              html {
                font-size: 25px;
              }
            }

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
            }
          `}</style>
        </head>
        <Head>
          <title>Zander Martineau</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
