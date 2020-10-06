import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(3.6)}px ${theme.spacing(1.8)}px`,
    textAlign: 'center',
    maxWidth: '20rem',
    marginTop: theme.spacing(5),
  },
  skillTitle: {
    marginBottom: theme.spacing(2),
  },
  skillText: {
    marginBottom: theme.spacing(1.8),
  },
  toolsTitle: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: '4rem',
    height: '4rem',
    margin: `-${theme.spacing(8)}px auto ${theme.spacing(4)}px auto`,
  },
}))

const SkillCard = props => {
  const { AvatarIcon, skillTitle, skillText, toolsTitle, tools } = props.skill
  const classes = useStyles()
  return (
    <Paper elevation={0} variant="outlined" className={classes.root}>
      <Avatar className={classes.avatar}>{AvatarIcon}</Avatar>
      <Typography variant="h5" className={classes.skillTitle}>
        {skillTitle}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.skillText}
      >
        {skillText}
      </Typography>
      <Typography variant="subtitle1" className={classes.toolsTitle}>
        {toolsTitle}
      </Typography>
      <Grid direction="column" alignItems="center" container spacing={1}>
        {tools?.map(tool => (
          <Grid item key={tool}>
            <Typography variant="button" color="primary">
              {tool}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default SkillCard
