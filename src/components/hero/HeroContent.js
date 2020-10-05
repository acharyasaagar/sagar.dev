import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headingContainer: { paddingTop: theme.spacing(2) },
  heroContentHeader: {
    marginBottom: theme.spacing(3),
  },
  heroContentText: {
    maxWidth: '30em',
    margin: theme.spacing(0, 'auto', 4, 'auto'),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 'auto', 4, 0),
    },
  },
  heroActions: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
}))

const HeroHeading = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.headingContainer}>
      <Grid item xs={12}>
        <Typography variant="h4">Hey there, I am</Typography>
      </Grid>
      <Grid item xs={12} className={classes.heroContentHeader}>
        <Typography variant="h1" color="primary">
          Sagar Acharya
        </Typography>
      </Grid>
    </Grid>
  )
}

const HeroText = () => {
  const classes = useStyles()

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      className={classes.heroContentText}
    >
      I am a full stack software developer with a degree in software engineering
      and various certifications on web application development.
    </Typography>
  )
}

const HeroActions = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={3}
      justify="center"
      className={classes.heroActions}
    >
      <Grid item>
        <Button variant="contained" color="primary" disableElevation>
          See Projects
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary">
          Contact me
        </Button>
      </Grid>
    </Grid>
  )
}

const HeroContent = () => {
  return (
    <Grid container direction="column" justify="space-around">
      <Grid item container direction="column">
        <Grid item>
          <HeroHeading />
        </Grid>
        <Grid item>
          <HeroText />
        </Grid>
      </Grid>
      <Grid item>
        <HeroActions />
      </Grid>
    </Grid>
  )
}

export default HeroContent
