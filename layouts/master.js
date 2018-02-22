import { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'

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
    </Head>

    {children}

    <Footer />
  </Fragment>
)
