import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Social from '../base/Social'
import FooterBody from './FooterBody'
import FooterForm from './FooterForm'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    background: theme.palette.primary.main,
    padding: theme.spacing(8, 4),
  },
  footerGrid: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'stretch',
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerContainer}>
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          spacing={6}
          className={classes.footerGrid}
        >
          <Grid item xs={12} md={4}>
            <FooterBody />
          </Grid>
          <Grid item xs={12} md={8}>
            <FooterForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
