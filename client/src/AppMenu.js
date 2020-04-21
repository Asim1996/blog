import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Javascript',
    link: '/',
    // Icon: IconDashboard,
  },
  {
    name: 'Node',
    link: '/node',
    // Icon: IconShoppingCart,
  },
  {
    name: 'React',
    link: '/react',
    // Icon: IconPeople,
  },
  {
    name: 'Mysql',
    link: '/mysql',
    // Icon: IconBarChart,
  },
  {
    name: 'Systemdesign',
    link: '/systemdesign',
    // Icon: IconLibraryBooks,
  },
]

const AppMenu = props => {
    const classes = useStyles()

    return (
      <List component="nav" className={classes.appMenu} disablePadding>
        {/* <AppMenuItem {...appMenuItems[0]} /> */}
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    )
} 

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
