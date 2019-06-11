import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import GlobalStyles from '../designsystem/globalStyles'
import Nav from '../components/Nav'
import { MasterLogo, Logo, MassiveLogo } from '../components/Logo'

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

    <Link href="/" passHref>
      <MasterLogo aria-label="Go home">
        <Logo size="50px" />
      </MasterLogo>
    </Link>

    <MassiveLogo>
      <Logo size="100vh" fill="transparent" stroke="var(--theme-foreground)" />
    </MassiveLogo>

    <Nav />

    {children}

    <Footer />
    <GlobalStyles />
  </Fragment>
)
