import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headerContainer: {
    textAlign: 'center',
    maxWidth: '30em',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
    },
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  subtitle: {
    paddingBottom: theme.spacing(4),
  },
}))

const ProjectsHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.headerContainer}>
      <Typography variant="h3" component="h3" className={classes.title}>
        My Projects
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="textSecondary"
        className={classes.subtitle}
      >
        I genuinely believe that the most effective way to learn something is
        doing it. These are the projects that helped me learn and grow my skills
        in UI design, front-end and back-end development.
      </Typography>
    </div>
  )
}

export default ProjectsHeader
