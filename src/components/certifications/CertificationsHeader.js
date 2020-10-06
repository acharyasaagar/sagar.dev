import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  certificationsHeader: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
}))

const CertificationsHeader = () => {
  const classes = useStyles()
  return (
    <Typography
      component="h3"
      variant="h3"
      className={classes.certificationsHeader}
    >
      Education & Certifications
    </Typography>
  )
}

export default CertificationsHeader
