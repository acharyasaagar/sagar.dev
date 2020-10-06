import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import ProjectCard from '../base/ProjectCard'

import myProjects from './myProjects'

const useStyles = makeStyles(theme => ({
  cardsContainer: {
    padding: theme.spacing(2, 0, 4, 0),
  },
  cardsGridContainer: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}))

const ProjectCards = () => {
  const classes = useStyles()
  return (
    <div className={classes.cardsContainer}>
      <Grid
        container
        direction="column"
        spacing={1}
        alignItems="center"
        className={classes.cardsGridContainer}
      >
        {myProjects?.map(project => (
          <Grid item key={project.title} md={4} container justify="center">
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProjectCards
