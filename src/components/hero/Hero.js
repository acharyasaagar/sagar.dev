import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { NAVBAR_HEIGHT } from '../../cssConstants'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const useStyles = makeStyles(theme => ({
  heroHeight: {
    height: `calc(100vh - 48px - ${NAVBAR_HEIGHT}) `,
  },
  heroContainer: {
    minHeight: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'left',
    },
  },
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <div className={classes.heroHeight}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        spacing={1}
        className={classes.heroContainer}
      >
        <Grid item md={6}>
          <HeroContent />
        </Grid>
        <Grid item container direction="column" justify="flex-end" md={6}>
          <HeroImage />
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
