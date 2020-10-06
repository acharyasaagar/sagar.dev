import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'
import OpenInNew from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.7s',
    '&:hover': {
      opacity: 0.9,
    },
    '&:focus': {
      opacity: 0.9,
    },
  },
  button: {
    borderColor: '#fff',
    color: '#fff',
    width: 160,
  },
}))

const ProjectCardOverlay = props => {
  const demoURL = props.demoURL || null
  const githubURL = props.githubURL || null
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container direction="column" spacing={1} alignItems="center">
        {demoURL && (
          <Grid item>
            <Button
              variant="outlined"
              className={classes.button}
              endIcon={<OpenInNew />}
              href={demoURL}
              target="_blank"
            >
              View Demo
            </Button>
          </Grid>
        )}
        {githubURL && (
          <Grid item>
            <Button
              variant="outlined"
              className={classes.button}
              endIcon={<OpenInNew />}
              href={githubURL}
              target="_blank"
            >
              View Github
            </Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  )
}

export default ProjectCardOverlay
