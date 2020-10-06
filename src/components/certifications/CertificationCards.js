import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import EducationCard from '../base/EducationCard'
import myCertifications from './myCertifications'

const useStyles = makeStyles(theme => ({
  cardsContainer: {
    width: '100%',
  },
}))

const CertificationCards = () => {
  const classes = useStyles()
  return (
    <div className={classes.cardsContainer}>
      <Grid container direction="column">
        {myCertifications?.map(certificate => (
          <Grid item key={certificate.certificateTitle} container>
            <EducationCard certificate={certificate} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CertificationCards
