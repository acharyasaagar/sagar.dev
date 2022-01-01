import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import GitHub from '@material-ui/icons/GitHub'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    backgroundImage: `url('/images/github-contributions.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    position: 'relative',
    padding: theme.spacing(8, 0),
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: '0.7',
    borderRadius: theme.spacing(),
    border: `1px solid ${theme.palette.grey[200]}`,
  },
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
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.buttonContainer}
    >
      <div className={classes.overlay}></div>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHub />}
          href="https://github.com/acharyasaagar"
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
