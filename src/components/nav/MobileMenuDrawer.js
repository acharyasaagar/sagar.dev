import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles } from '@material-ui/core/styles'

import menu from './menu'

const ListItemLink = props => <ListItem button component="a" {...props} />

const drawerWidth = '100%'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    padding: theme.spacing(1.5, 1),
  },
  listRoot: {
    paddingLeft: theme.spacing(1),
  },
}))

const MobileMenuDrawer = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const listTextTypography = {
    variant: 'body2',
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <IconButton color="primary" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        className={classes.drawerPaper}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="primary">
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listRoot}>
          {menu.map((menu, index) => (
            <ListItemLink key={menu.title} href={menu.href}>
              <ListItemText
                primary={menu.title}
                primaryTypographyProps={listTextTypography}
              />
            </ListItemLink>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
export default MobileMenuDrawer
