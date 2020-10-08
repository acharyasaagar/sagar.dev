import React, { useEffect } from 'react'

import Head from 'next/head'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../src/theme'

const MyApp = props => {
  const { Component, pageProps } = props

  const removeServerInjectedStyles = () => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  useEffect(() => {
    removeServerInjectedStyles()
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Sagar Acharya is a full stack software developer based in Helsinki. He loves bringing ideas into reality through coding."
        ></meta>
        <meta
          name="keywords"
          content="Software developers in Helsinki, Web Developers in Helsinki"
        ></meta>
        <meta name="author" content="Sagar Acharya"></meta>
        <title>Sagar Acharya - Full stack developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
