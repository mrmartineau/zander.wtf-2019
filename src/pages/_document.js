import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
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
          <link rel="dns-prefetch" href="https://zanderwtf.prismic.io" />
          <link rel="dns-prefetch" href="https://pinboard-api.now.sh" />
          <link rel="preconnect" href="https://pinboard-api.now.sh" />
          <link rel="preconnect" href="https://zanderwtf.prismic.io" />
          <link
            rel="prefetch"
            href="https://zander.wtf/static/fonts/iAWriterDuospace/iAWriterDuospace-Regular.woff2"
          />
          <link
            rel="prefetch"
            href="https://zander.wtf/static/fonts/iAWriterDuospace/iAWriterDuospace-Italic.woff2"
          />
          <link
            rel="prefetch"
            href="https://zander.wtf/static/fonts/iAWriterDuospace/iAWriterDuospace-Bold.woff2"
          />
          <link
            rel="prefetch"
            href="https://zander.wtf/static/fonts/iAWriterDuospace/iAWriterDuospace-BoldItalic.woff2"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://zander.wtf/static/favicon/apple-touch-icon.png?v=4769nKP32b"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://zander.wtf/static/favicon/favicon-32x32.png?v=4769nKP32b"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://zander.wtf/static/favicon/favicon-16x16.png?v=4769nKP32b"
          />
          <link
            rel="manifest"
            href="https://zander.wtf/static/favicon/site.webmanifest?v=4769nKP32b"
          />
          <link
            rel="mask-icon"
            href="https://zander.wtf/static/favicon/safari-pinned-tab.svg?v=4769nKP32b"
            color="#15181c"
          />
          <link
            rel="shortcut icon"
            href="https://zander.wtf/static/favicon/favicon.ico?v=4769nKP32b"
          />
          <meta name="apple-mobile-web-app-title" content="zander.wtf" />
          <meta name="application-name" content="zander.wtf" />
          <meta name="msapplication-TileColor" content="#15181c" />
          <meta
            name="msapplication-config"
            content="https://zander.wtf/static/favicon/browserconfig.xml?v=4769nKP32b"
          />
          <meta name="theme-color" content="#15181c"></meta>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@mrmartineau" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:image"
            content="https://zander.wtf/static/opengraph.jpg"
          />
          <meta property="og:url" content="https://zander.wtf" />
          <link
            rel="alternate"
            href="https://zander.wtf/atom.xml"
            type="application/atom+xml"
            title="RSS Feed"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
