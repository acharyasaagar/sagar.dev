import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  downloadButton: {
    transition: 'background-color 0.3s, color 0.5s',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      border: 'none',
    },
  },
}))

const DownloadCVButton = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<GetAppRoundedIcon />}
          href="/SagarAcharyaCV.pdf"
          target="_blank"
          size="large"
          className={classes.downloadButton}
          download
        >
          download my cv
        </Button>
      </Grid>
    </Grid>
  )
}

export default DownloadCVButton
