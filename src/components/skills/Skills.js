import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import SkillsHeader from './SkillsHeader'
import SkillCards from './SkillCards'

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    padding: theme.spacing(5, 0),
  },
}))

const Skills = () => {
  const classes = useStyles()
  return (
    <div className={classes.skillsContainer}>
      <Grid container direction="column">
        <Grid item>
          <SkillsHeader />
        </Grid>
        <Grid item>
          <SkillCards />
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills
