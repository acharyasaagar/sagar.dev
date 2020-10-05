import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  aboutHeader: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  aboutText: {
    maxWidth: '30em',
    margin: theme.spacing(0, 'auto', 4, 'auto'),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 'auto', 4, 0),
      textAlign: 'justify',
      maxWidth: 'unset',
    },
  },
}))

const AboutContent = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" className={classes.aboutHeader}>
          This is my story
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.aboutText}
        >
          I am a software engineering graduate from Metropolia UAS. I am
          passionate about designing and building robust web applications with
          beautiful user interfaces. I started my programming journey with HTML,
          CSS and Javascript to build user interfaces and gradually extended my
          skills to include backend systems development with Nodejs and
          Postgresql. I plan to continue growing myself as a software developer
          by persistently learning, trying and building new things.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutContent
