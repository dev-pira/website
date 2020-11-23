import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  title: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={process.env.PUBLIC_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/assets/featured-image.png`}
        />
      </Head>
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default Layout
