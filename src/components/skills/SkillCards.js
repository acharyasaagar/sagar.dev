import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import SkillCard from '../base/SkillCard'

import mySkills from './mySkills'

const useStyles = makeStyles(theme => ({
  skillCardsContainer: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}))

const SkillCards = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      className={classes.skillCardsContainer}
      spacing={2}
    >
      {mySkills?.map(skill => (
        <Grid item key={skill.skillText} md={4} container justify="center">
          <SkillCard skill={skill} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SkillCards
