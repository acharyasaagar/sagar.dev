import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  skillsHeader: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
}))

const SkillsHeader = () => {
  const classes = useStyles()
  return (
    <Typography component="h3" variant="h3" className={classes.skillsHeader}>
      I am good at
    </Typography>
  )
}

export default SkillsHeader
