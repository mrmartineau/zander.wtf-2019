import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import GlobalStyles from '../designsystem/globalStyles'
import Nav from '../components/Nav'
import { MasterLogo, Logo } from '../components/Logo'
import ThemeSwitch from '../components/ThemeSwitch'

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

    <Link href="/">
      <MasterLogo aria-label="Go home" href="/">
        <Logo size="3rem" />
      </MasterLogo>
    </Link>

    <Nav />

    <ThemeSwitch />

    {children}

    <Footer />

    <GlobalStyles />
  </Fragment>
)
