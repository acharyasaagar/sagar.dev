import React from 'react'

import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

import ProfileImage from '../base/ProfileImage'
import AboutContent from './AboutContent'

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.aboutContainer} id="about">
      <Grid container spacing={4} justify="space-between">
        <Grid item md={4}>
          <Grid item>
            <Hidden smDown>
              <ProfileImage />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <AboutContent />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
