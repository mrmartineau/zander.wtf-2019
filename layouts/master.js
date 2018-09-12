import { Fragment } from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import ThemeSwitch from '../components/ThemeSwitch'
import globalStyles from '../designsystem/globalStyles'

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`

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
      {canonical && <link rel="canonical" href={canonical} />}
      <link
        rel="alternate"
        href="/atom.xml"
        type="application/atom+xml"
        title="RSS Feed"
      />
    </Head>

    {children}

    <Footer />
    <ThemeSwitch />
    <GlobalStyles />
  </Fragment>
)
