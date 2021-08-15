import React from 'react'
import Social from '../base/Social'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footerBodyContainer: {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
  },
  gridContainer: {
    maxWidth: '30em',
  },
  bodyHeading: {
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  bodyText: {
    paddingBottom: theme.spacing(4),
  },
}))


const FooterBody = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerBodyContainer}>
      <Grid container direction="column" className={classes.gridContainer}>
        <Grid item>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            className={classes.bodyHeading}
          >
            Contact Me
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.bodyText}>
            Did you like what you see? Do you have an idea or a project in your
            mind that we could do together?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.bodyText}>
            Shoot me a message using the contact form.
          </Typography>
        </Grid>
        <Grid item>
          <Hidden smDown>
            <Social />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  )
}

export default FooterBody
