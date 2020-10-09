import React from 'react'

import IconButton from '@material-ui/core/IconButton'

import GitHubIcon from '../../icons/Github'
import LinkedInIcon from '../../icons/Linkedin'
import TwitterIcon from '../../icons/Twitter'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  iconContainer: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialIcon: {
    color: theme.palette.common.white,
    padding: theme.spacing(1.5, 0),
    '&:nth-child(2)': {
      padding: theme.spacing(1.5),
    },
    '&  svg': {
      width: '2rem',
      height: '2rem',
    },
  },
}))

const Social = () => {
  const classes = useStyles()
  return (
    <div className={classes.iconContainer}>
      <IconButton
        href="https://www.linkedin.com/in/acharyasaagar"
        target="_blank"
        className={classes.socialIcon}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
      <IconButton
        className={classes.socialIcon}
        href="https://github.com/acharyasagar"
        target="_blank"
      >
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton
        className={classes.socialIcon}
        href="https://twitter.com/acharyasaagar"
        target="_blank"
      >
        <TwitterIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default Social
