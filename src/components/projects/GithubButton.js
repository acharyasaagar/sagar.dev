import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GitHub from '@material-ui/icons/GitHub'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  githubButton: {
    transition: 'background-color 0.3s, color 0.5s',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      border: 'none',
    },
  },
}))

const GithubButton = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<GitHub />}
          href="https://github.com/acharyasagar"
          target="_blank"
          size="large"
          className={classes.githubButton}
        >
          checkout my github
        </Button>
      </Grid>
    </Grid>
  )
}

export default GithubButton
