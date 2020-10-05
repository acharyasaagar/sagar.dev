import React from 'react'

import Hidden from '@material-ui/core/Hidden'

import { makeStyles } from '@material-ui/core/styles'

import { NAVBAR_HEIGHT } from '../../cssConstants'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

import menuItems from './menuItems'

const useStyles = makeStyles(theme => ({
  navBarContainer: {
    height: NAVBAR_HEIGHT,
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <div className={classes.navBarContainer}>
      <Hidden xsDown implementation="css">
        <DesktopMenu menuItems={menuItems} />
      </Hidden>
      <Hidden smUp implementation="css">
        <MobileMenu menuItems={menuItems} />
      </Hidden>
    </div>
  )
}

export default NavBar
