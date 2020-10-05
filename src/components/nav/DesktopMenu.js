import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  navLink: {
    textTransform: 'Capitalize',
    '&:first-child': {
      marginLeft: -theme.spacing(1),
    },
  },
}))

const DesktopMenu = props => {
  const classes = useStyles()
  const { menuItems } = props

  return (
    <ul className={classes.root}>
      {menuItems?.map(menuItem => (
        <Button
          component="a"
          className={classes.navLink}
          href={menuItem.href}
          key={menuItem.title}
        >
          <Typography component="span" variant="body2" color="primary">
            {menuItem.title}
          </Typography>
        </Button>
      ))}
    </ul>
  )
}

export default DesktopMenu
