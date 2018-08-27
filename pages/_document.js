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
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @supports (--theme-foreground: #fff) {
                :root,
                :root.theme-inverse .inverse {
                  --theme-foreground: #fff;
                  --theme-background: #000;
                }

                :root.theme-inverse,
                :root .inverse {
                  --theme-foreground: #000;
                  --theme-background: #fff;
                }
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
          `,
            }}
          />
          {this.props.styleTags}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="author" href="Zander Martineau" />
          <link
            rel="me"
            href="https://github.com/mrmartineau"
            type="text/html"
          />
          <meta name="robots" content="index,follow" />
          <meta
            name="google-site-verification"
            content="0jhxV5hlLfqQ8q7mc6Xif2GjQ64gn-aXasg1EKeW3gw"
          />
          <meta name="geo.region" content="GB" />
          <meta name="geo.placename" content="London" />
          <meta name="theme-color" content="#000" />
          <meta name="application-name" content="Zander" />
          <link rel="dns-prefetch" href="https://zanderwtf.prismic.io" />
          <link rel="dns-prefetch" href="https://pinboard-api.now.sh" />
          <link rel="preconnect" href="https://pinboard-api.now.sh" />
          <link rel="preconnect" href="https://zanderwtf.prismic.io" />
          <link rel="prefetch" href="/static/fonts/ColfaxWebRegularSub.woff" />
          <link rel="prefetch" href="/static/fonts/ColfaxWebBoldSub.woff" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@mrmartineau" />
          <meta property="og:locale" content="en_US" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
