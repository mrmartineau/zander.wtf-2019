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
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {this.props.styleTags}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
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
