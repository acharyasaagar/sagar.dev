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

const drawerWidth = '100%'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuIcon: {
    marginLeft: -theme.spacing(1.5),
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

const ListItemLink = props => <ListItem button component="a" {...props} />

const MobileMenuDrawer = props => {
  const { handleDrawerClose, menuItems, open } = props
  const classes = useStyles()

  const listTextTypography = {
    variant: 'body2',
    color: 'primary',
  }

  return (
    <Drawer
      className={classes.drawer}
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
        {menuItems?.map(menu => (
          <ListItemLink key={menu.title} href={menu.href}>
            <ListItemText
              primary={menu.title}
              primaryTypographyProps={listTextTypography}
            />
          </ListItemLink>
        ))}
      </List>
    </Drawer>
  )
}

const MobileMenuIcon = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        onClick={props.handleDrawerOpen}
        className={classes.menuIcon}
      >
        <MenuIcon />
      </IconButton>
    </div>
  )
}

const MobileMenu = props => {
  const { menuItems } = props
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <MobileMenuIcon handleDrawerOpen={handleDrawerOpen} />
      <MobileMenuDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        menuItems={menuItems}
      />
    </div>
  )
}
export default MobileMenu
