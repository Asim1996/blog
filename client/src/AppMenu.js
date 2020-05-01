import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Javascript',
    link: '/javascript',
  },
  {
    name: 'Node',
    link: '/node',
  },
  {
    name: 'React',
    link: '/react',
  },
  {
    name: 'Mysql',
    link: '/mysql',
  },
  {
    name: 'System Design',
    link: '/systemdesign',
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
      marginTop:'30px'
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
  }),
)

export default AppMenu
