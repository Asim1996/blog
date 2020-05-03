import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'
import AppMenuItemComponent from './AppMenuItemComponent'
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}

const AppMenuItem = props => {
  const { name, link, Icon, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} link={link} onClick={handleClick}>
      <ThemeProvider theme={theme}>
        <ListItemText primary={name} inset={!Icon} />
      </ThemeProvider>
      {isExpandable && !open}
      {isExpandable && open}
    </AppMenuItemComponent>
  )



  return (
    <>
      {MenuItemRoot}
    </>
  )
}


const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "Lato",
        letterSpacing: '2px',
        lineHeight: 2
      },
    },
  },
});


const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      '&.active': {
        background: '#4286f4',
        borderRadius: '10px',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    listItem: {
      fontWeight: 800,
      fontFamily: "lato",
      lineHeight: 2,
      letterSpacing: 2,
      padding: 0
    }
  }),
)

export default AppMenuItem
