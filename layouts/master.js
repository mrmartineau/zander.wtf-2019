import { Fragment } from 'react'
import Head from 'next/head'

export default ({
  children,
  title = 'This is the default title',
  description = 'Personal website for Zander Martineau',
  canonical = null,
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="author" href="Zander Martineau" />
      <link rel="me" href="https://github.com/mrmartineau" type="text/html" />
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
      {canonical && <link rel="canonical" href={canonical} />}
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
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>

    {children}
  </Fragment>
)
