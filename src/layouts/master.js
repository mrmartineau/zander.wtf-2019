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
  links = [],
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>

    <Link href="/">
      <MasterLogo aria-label="Go home" href="/">
        <Logo size="4rem" />
      </MasterLogo>
    </Link>

    <Nav />

    <ThemeSwitch />

    {children}

    <Footer links={links} />

    <GlobalStyles />
  </Fragment>
)
