import React from 'react'

import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

import ProjectsHeader from './ProjectsHeader'
import ProjectCards from './ProjectCards'
import GitHubButton from './GithubButton'

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    padding: theme.spacing(8, 0),
  },
}))

const Project = () => {
  const classes = useStyles()
  return (
    <div className={classes.projectsContainer} id="projects">
      <Grid container direction="column" justify="space-between">
        <Grid item>
          <ProjectsHeader />
        </Grid>
        <Grid item>
          <ProjectCards />
        </Grid>
        <Grid item>
          <GitHubButton />
        </Grid>
      </Grid>
    </div>
  )
}

export default Project
