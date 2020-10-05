import React from 'react'

import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import ProfileImage from '../base/ProfileImage'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroImageContainer: {
    width: '100%',
  },
}))

const HeroImage = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" className={classes.heroImageContainer}>
      <Grid item>
        <Hidden mdUp>
          <ProfileImage />
        </Hidden>
      </Grid>
      <Grid item>
        <Hidden smDown>
          <img src="/svgs/illustration.svg" />
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default HeroImage
