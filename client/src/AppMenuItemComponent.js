import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink, NavLinkProps } from 'react-router-dom'


const AppMenuItemComponent =props => {
    const { className, onClick, link, children } = props
   // Return a LitItem with a link component
    return (
      <ListItem
        button
        className={className}
        children={children}
        component={forwardRef((props, ref) => <NavLink exact {...props} innerRef={ref} />)}
        to={link}
      />
    )
  }
  
  export default AppMenuItemComponent
  