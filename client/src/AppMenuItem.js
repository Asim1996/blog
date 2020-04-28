import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import List from '@material-ui/core/List'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import AppMenuItemComponent from './AppMenuItemComponent'
export const AppMenuItemPropTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    Icon: PropTypes.elementType,
    items: PropTypes.array,
  }
  
const AppMenuItem =props =>{
    const { name, link, Icon, items = [] } = props
  const classes = useStyles()
  // const theme = useTheme();
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ThemeProvider theme={theme}>
      <ListItemText primary={name} inset={!Icon } />
      </ThemeProvider>
      {/* Display the expand menu if the item has children */}
      {/* {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />} */}
      {isExpandable && !open }
      {isExpandable && open }
    </AppMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding >
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}   


const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily:"Lato",
        letterSpacing: '2px',
        lineHeight:2

      },
    },
  },
});
  

const useStyles = makeStyles(theme =>
    createStyles({
      menuItem: {
        '&.active': {
          background: 'rgba(0, 0, 0, 0.06)',
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
        },
      },
      listItem:{
        fontWeight:800,
        fontFamily:"lato",
        lineHeight:2,
        letterSpacing:2
      }
      // menuItemIcon: {
      //   color: '#97c05c',
      // },
    }),
  )
  
  export default AppMenuItem
  