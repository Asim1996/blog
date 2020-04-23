import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import BlogView from './components/BlogView'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const App = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
      <NavBar />
      <SideBar />
      <BlogView />
      </BrowserRouter>
    </div>

  )
}


export default App;
