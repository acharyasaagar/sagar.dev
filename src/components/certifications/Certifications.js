import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CertificationsHeader from './CertificationsHeader'
import CertificationCards from './CertificationCards'
import DownloadCVButton from './DownloadCVButton'

const useStyles = makeStyles((theme) => ({
  certificationsContainer: {
    padding: theme.spacing(8, 0),
  },
  gridContainer: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'stretch',
    },
  },
}))

const Certifications = () => {
  const classes = useStyles()
  return (
    <div className={classes.certificationsContainer} id="education">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        className={classes.gridContainer}
      >
        <Grid item>
          <CertificationsHeader />
        </Grid>
        <Grid item>
          <CertificationCards />
        </Grid>
        <Grid item>
          <DownloadCVButton />
        </Grid>
      </Grid>
    </div>
  )
}

export default Certifications
