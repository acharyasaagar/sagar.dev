import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    width: '15rem',
    height: '15rem',
    maxWidth: '15rem',
    maxHeight: '15rem',
    margin: theme.spacing(3, 0),
  },
  imageContainer: {
    position: 'relative',
    paddingTop: 'calc(1 / 1 * 100%)',
    boxSizing: 'border-box',
    borderWidth: theme.spacing(1.5),
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    top: -theme.spacing(3.5),
    left: theme.spacing(1.5),
    width: `calc(100% + ${theme.spacing(2)}px)`,
    height: `calc(100% + ${theme.spacing(2)}px)`,
  },
}))

const ProfileImage = props => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src="/images/profile.jpg" />
      </div>
    </div>
  )
}

export default ProfileImage
