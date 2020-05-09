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
    name: 'Aws',
    link: '/aws',
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
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    )
} 

const drawerWidth = 260

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
