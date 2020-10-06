import React from 'react'

import Container from '@material-ui/core/Container'

import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appContainer: {
    padding: theme.spacing(2, 4),
  },
}))

import NavBar from './nav/NavBar'
import Hero from './hero/Hero'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Project'
import Certifications from './certifications/Certifications'

const App = () => {
  const classes = useStyles()
  return (
    <>
      {/*  Application container */}
      <Container maxWidth="lg" className={classes.appContainer}>
        <NavBar />
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Certifications />
      </Container>
    </>
  )
}

export default App
